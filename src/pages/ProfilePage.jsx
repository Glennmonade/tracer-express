import React, {useState, useEffect} from 'react';
import QrCode from 'qrcode.react';
import { ProfileContainer, ProfileContentContainer, ProfileTopBar, ProfileTopBarWrapper, ProfileTopLeft, ProfileTopRight, ProfileName, ProfileTopBarIConContainer, FormBtn, FormBtnWwrapper} from '../components/styles';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutCommuter } from '../auth/actions/userActions';
import {Logout, Person} from '@mui/icons-material';
import { Form, Formik, Field } from 'formik';
import axios from 'axios';



const ProfilePage = ({logoutCommuter, user}) => {

    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [health, setHealth] = useState("Good Condition");
    const [modalVisible, setModalVisible] = useState(false);
    const [pageVisible, setPageVisible] = useState(true);
    
    useEffect(() => {
        const {qrId, healthStatus} = user;
        setUserId(qrId);
        setHealth(healthStatus);
    }, []);


    const {firstName, lastName} = user;
    const fullName = firstName + " " + lastName;

    
    const onUpdate = (credentials, userId) => {


        axios.put(`https://pure-cliffs-59602.herokuapp.com/commuter/${userId}`, credentials, {
            headers: {
                "Content-Type": "application/json",
                
            },

        }) .then((response) => {
            const {data} = response;
            if(data.status === "Success") {
                alert("Health Status Updated");
                window.location.reload(true);
            }
            else{
                alert("Update Failed");
            }
        }).catch(err => {
            alert(err);
        })
    }

  return (
      <>
       
      <ProfileTopBar>
          <ProfileTopBarWrapper>
              <ProfileTopLeft>
              </ProfileTopLeft>
              <ProfileTopRight>
                <ProfileTopBarIConContainer>
                <Person style={{marginRight: "5px"}}/>My Account
                </ProfileTopBarIConContainer>
                <ProfileTopBarIConContainer onClick={async () => logoutCommuter(navigate)}>
                <Logout style={{marginRight: "5px"}}/>Log Out
                </ProfileTopBarIConContainer>
              </ProfileTopRight>
          </ProfileTopBarWrapper>
      </ProfileTopBar>
      {modalVisible && 
                    <div style={{width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", position: "fixed", paddingTop: "10rem"}}>
                        <h2 style={{textAlign: "center"}}>Updated Successfully!</h2>
                        <FormBtnWwrapper>
                            <FormBtn login={true} type='submit' onClick={() => setModalVisible(false) || setPageVisible(true)}>Close</FormBtn>
                        </FormBtnWwrapper>

                    </div>
                }

{ pageVisible && <ProfileContainer>
            <ProfileContentContainer>
                <div style={{flex: 1}}>
                <h1 style={{textAlign: "center", color: "#E33311"}}>{fullName}</h1>
                <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                <QrCode 
                            value={""+user.qrId}
                            fgColor={"#1126E3"}
                            size={200}
                            />
                </div>
                <br/>
                <br/>
                <p style={{textAlign: "center"}}>Take a screenshot of your QR Code <br/>and present this when you ride a bus.</p>
                </div>
                <div style={{flex: 1}}>
                </div>
            </ProfileContentContainer>


            <ProfileContainer>
              
                <ProfileContentContainer>
                    
                    <div style={{flex: 1}}>
                    <h1 style={{textAlign: "center", color: "#E33311", marginBottom: "2rem"}}>Health Status: {health} </h1>

                    <Formik
                        initialValues={{
                            vaccinated: "no", covidSymptoms: "", 
                        }}

                        onSubmit={(
                            values
                        ) => {
                            onUpdate(values, userId);
                            console.log(values);
                        }}
                    >
                <Form>
                <label><Field type="checkbox" name="vaccinated" value="yes" />Vaccinated ?</label><br/><br/>
                <h2>Do you experienced any of the following?</h2><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Fever"/>Fever</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Dry Cough" />Dry Cough</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Fatigue" />Fatigue</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Aches And Pains" />Aches And Pains</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Runny Nose" />Runny Nose</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Sore Throat" />Sore Throat</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Shortness Of Breathe" />Shortness Of Breathe</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Diarrhea" />Diarrhea</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Headache" />Headache</label><br/>
                <label><Field type="checkbox" name="covidSymptoms" value="Loss Of Smell And Taste" />Loss Of Smell And Taste</label><br/>
                <FormBtnWwrapper>
                    <FormBtn login={true} type='submit'>Update Health Status</FormBtn>
                </FormBtnWwrapper>
                    </Form>
                    </Formik>
                    </div>

                    <div style={{flex: 1}}></div>
                   
                   
                </ProfileContentContainer>

            </ProfileContainer>
        </ProfileContainer>
}      </>
  )
};
const mapStateToProps = ({session}) => ({
    user: session.user
})
export default connect(mapStateToProps, {logoutCommuter}) (ProfilePage);

