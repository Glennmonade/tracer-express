import React from 'react';
import { FormBtn, FormBtnWwrapper,  FormWrapper, InputWrapper, LoginContainer, LoginForm, Title, Avatar } from '../components/styles';
import { useNavigate } from 'react-router-dom';
import {TextInput} from './../components/FormLib'
import { FiUser, FiLock, FiFlag, FiPhone, FiMail, FiBriefcase } from 'react-icons/fi';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {Circles} from 'react-loader-spinner';
import {adminSignup} from './../auth/actions/userActions';
import {connect} from 'react-redux';
import Logo from './../assets/TracerExpress-Logo2.png'


const AdminSignupPage = ({adminSignup}) => {
    const navigate = useNavigate();
  return (
      <>
         <LoginContainer>
        <LoginForm>
          <FormWrapper signup={true}>
          <Avatar image={Logo} formLogo={true}/>
          <Title formtitle={true}>Sign up For Bus Company</Title>
          <Formik initialValues={{
            busName: "",
            contactPerson: "",
            contactNumber: "",
            rFrom: "",
            rTo: "",
            email: "",
            password: "",
            confirmPassword:""

          }}
          validationSchema={
            Yup.object({
              email: Yup.string().required("required"),
              password: Yup.string().min(8, "Password is too short")
              .max(30, "Password exceed 30 characters").required("required"),
              contactPerson: Yup.string().required("required"),
              contactNumber: Yup.string().required("required"),
              rFrom: Yup.string().required("required"),
              rTo: Yup.string().required("required"),
              confirmPassword: Yup.string().required("required")
              .oneOf([Yup.ref("password")], "passwor doesn't matched")


            })
          }
          onSubmit={(values, {setSubmitting, setFieldError}) => {
            adminSignup(values, navigate, setFieldError, setSubmitting);
          }}
          >
          {({isSubmitting}) => 
         ( 
           <Form>
            <InputWrapper>
                <TextInput name="busName" type="text" label="Bus Company Name" icon={<FiBriefcase/>} />
                <TextInput name="contactPerson" type="text" label="Contact Person" icon={<FiUser/>}  />
                <TextInput name="rFrom" type="text" label="Route From" icon={<FiFlag/>}  />
                <TextInput name="rTo" type="text" label="Route To" icon={<FiFlag/>}  />
                <TextInput name="contactNumber" type="text" label="Contact Number" icon={<FiPhone/>}  />
                <TextInput name="email" type="text" label="Email Address" icon={<FiMail/>}  />
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

export default connect(null, {adminSignup}) (AdminSignupPage);
