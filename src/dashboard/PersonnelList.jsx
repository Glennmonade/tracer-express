import React, {useState, useEffect} from 'react'
import { PerListContainer } from '../components/styles'
import { DataGrid} from '@mui/x-data-grid';
import axios from 'axios';
import {connect} from 'react-redux';


const PersonnelList = ({user}) => {
    const [tableData, setTableData] = useState([]);
    const columns = [
        {field: 'busName', headerName: 'Bus Name', width: 300},
        {field: 'busNumber', headerName: 'Bus Number', width: 300},
        {field: 'authPerson', headerName: 'Personnel Name', width: 300},
        {field: 'contactNumber', headerName: 'Contact Number', width: 300},
        {field: 'username', headerName: 'User Name', width: 300},
    ]

    useEffect(() => {
        const {busName} = user;
        const fetchParams = "Test Bus";
        axios.get(`https://pure-cliffs-59602.herokuapp.com/admin/subadmin-list/${fetchParams}`,{
            headers:{
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if(response.length){
            const {data} = response.data;
            const fetchedData = data
            console.log(fetchedData);
            setTableData(fetchedData)}

            else{
                setTableData([]);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

  return (
        <PerListContainer>
            Personnel List
             <div style={{ height: 500, width: '100%' }}> 
            <DataGrid 
            getRowId={(row) => row._id}
            rows={tableData}
            columns={columns}
            pageSize={10}
            rowHeight={30}
            />
        </div>
        </PerListContainer>
    )
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps) (PersonnelList);