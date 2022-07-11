import React, {useState, useEffect} from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { DigitalLogBookContainer } from '../components/styles';
import axios from 'axios';
import {connect} from 'react-redux';


const DigitalLogBook = ({user}) => {
    const [tableData, setTableData] = useState([]);

    const {busName} = user;
    useEffect(() => {
        axios.get(`https://pure-cliffs-59602.herokuapp.com/logs/fetch-logs${busName}`, {
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
    }, [])

    const columns = [
        
        {field: 'firstName', headerName: 'First Name', width: 300},
        {field: 'middleName', headerName: 'Middle Name', width: 300},
        {field: 'lastName', headerName: 'Last Name', width: 300},
        {field: 'contactNumber', headerName: 'Contact Number', width: 300},
        {field: 'address', headerName: 'Address', width: 300},
        {field: 'year', headerName: 'Year', width: 300},
        {field: 'month', headerName: 'Month', width: 300},
        {field: 'date', headerName: 'Date', width: 300},
        {field: 'time', headerName: 'TIme', width: 300},

    ]
    

  return (
    <DigitalLogBookContainer>
        <div style={{ height: 600, width: '100%' }}> 
            <DataGrid 
            getRowId={(row) =>
                row._id
            }
            rows={tableData}
            columns={columns}
            pageSize={10}
            rowHeight={30}
            />
        </div>
    </DigitalLogBookContainer>
  )
}

const mapStateToProps = ({session}) => ({
    user: session.user.busName
})
export default connect(mapStateToProps) (DigitalLogBook)