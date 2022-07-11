import React from 'react'
import { FormBtnWwrapper, PerListContainer, FormBtn } from '../components/styles'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {TextInput} from '.././components/FormLib'
import { useNavigate } from 'react-router-dom';
import { addPersonnel } from '../auth/actions/userActions';
import {Circles} from 'react-loader-spinner';


const AddPersonel = () => {
    const navigate = useNavigate();

  return (
        <PerListContainer>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Formik initialValues={{
                busName: "",
                busNumber: "",
                authPerson: "",
                contactNumber: "",
                username: "",
                password: ""
            }}
            validationSchema={
                Yup.object({
                    busName: Yup.string().required("required"),
                    busNumber: Yup.string().required("required"),
                    authPerson: Yup.string().required("required"),
                    contactNumber: Yup.string().required("required"),
                    username: Yup.string().required("required"),
                    password: Yup.string().min(8, "Password too short")
                    .max(30, "Password exceed 30 characters").required("required")
                })
            }
            onSubmit={(values, {setSubmitting, setFieldError}) => {
                addPersonnel(values, navigate, setFieldError, setSubmitting);
            }}
            >
            
            {({isSubmitting}) =>
           (<Form>
            <div style={{flex: 1}}>
                    <TextInput name="busName" type="text" label="Bus Name" />
                    <TextInput name="busNumber" type="text" label="Bus Number" />
                    <TextInput name="authPerson" type="text" label="Personnel Name" />
                    <TextInput name="contactNumber" type="text" label="Contact Number" />
                    <TextInput name="username" type="text" label="User Name" />
                    <TextInput name="password" type="text" label="Password" />
                    <FormBtnWwrapper>
                        {!isSubmitting && (<FormBtn type='submit' login={true}>Add</FormBtn>)}
                        {!isSubmitting && (<FormBtn cancel={true} onClick={() => navigate("/admin-dashboard/add-personnel")}>Cancel</FormBtn>)}
                        {
                            isSubmitting && (
                                <Circles 
                                color="#E33311"
                                height={49}
                                width={100}
            
                              />
                            )
                        }
                    </FormBtnWwrapper>   
                    </div>   
            </Form>)
            }


            </Formik>
            </div>
        </PerListContainer>
    )
}

export default AddPersonel