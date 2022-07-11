import React from 'react';
import { FormBtn, FormBtnWwrapper,  FormWrapper, InputWrapper, LoginContainer, LoginForm, Title, Avatar, FormLabel } from '../components/styles';
import { useNavigate } from 'react-router-dom';
import {TextInput} from './../components/FormLib'
import { FiUser, FiLock, FiFlag, FiPhone } from 'react-icons/fi';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import {Circles} from 'react-loader-spinner';
import {signupCommuter} from './../auth/actions/userActions';
import {connect} from 'react-redux';
import Logo from './../assets/TracerExpress-Logo2.png'


const SignupPage = ({signupCommuter}) => {
    const navigate = useNavigate();
  return (
      <>
         <LoginContainer>
        <LoginForm>
          <FormWrapper signup={true}>
          <Avatar image={Logo} formLogo={true}/>
          <Title formtitle={true}>Sign up as commuter</Title>
          <Formik initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            address: "",
            gender: "",
            contactNumber: "",
            username: "",
            password: "",
            confirmPassword:""

          }}
          validationSchema={
            Yup.object({
              username: Yup.string().required("required"),
              password: Yup.string().min(8, "Password is too short")
              .max(30, "Password exceed 30 characters").required("required"),
              firstName: Yup.string().required("required"),
              lastName: Yup.string().required("required"),
              contactNumber: Yup.string().required("required"),
              address: Yup.string().required("required"),
              gender: Yup.string().required("required"),
              confirmPassword: Yup.string().required("required")
              .oneOf([Yup.ref("password")], "passwor doesn't matched")


            })
          }
          onSubmit={(values, {setSubmitting, setFieldError}) => {
            signupCommuter(values, navigate, setFieldError, setSubmitting);
          }}
          >
          {({isSubmitting}) => 
         ( 
           <Form>
            <InputWrapper>
                <TextInput name="firstName" type="text" label="First Name" icon={<FiUser/>} />
                <TextInput name="middleName" type="text" label="Middle Name" icon={<FiUser/>}  />
                <TextInput name="lastName" type="text" label="Last Name" icon={<FiUser/>}  />
                <div style={{display: "flex",width: "380px", marginLeft: "5px"}}>
                  <FormLabel>Gender</FormLabel>
                </div>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "350px", marginBottom: "10px"}}>
                <label>
                <Field name="gender" type="radio" value="Male"/> Male
                </label>
                <label>
                <Field name="gender" type="radio" value="Female"/> Female
                </label>
                </div>
                <TextInput name="address" type="text" label="Address" icon={<FiFlag/>}  />
                <TextInput name="contactNumber" type="text" label="Contact Number" icon={<FiPhone/>}  />
                <TextInput name="username" type="text" label="Username" icon={<FiUser/>}  />
                <TextInput name="password" type="password" label="Password" icon={<FiLock/>}  />
                <TextInput name="confirmPassword" type="password" label="Confirm Password" icon={<FiLock/>}  />
            </InputWrapper> 
            <FormBtnWwrapper>
              {!isSubmitting && (<FormBtn login={true} type='submit'>Submit</FormBtn>)}
              {!isSubmitting && (<FormBtn cancel={true} onClick={() => navigate("/")}>Cancel</FormBtn>)}
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
            </Form>
            )
            }
            </Formik>
          </FormWrapper>
        </LoginForm>
      </LoginContainer>
      </>
  )
};

export default connect(null, {signupCommuter}) (SignupPage);
