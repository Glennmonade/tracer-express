import React from 'react';
import { FormBtn, FormBtnWwrapper,  FormWrapper, InputWrapper, LoginContainer, LoginForm, Title, Avatar } from '../components/styles';
import { useNavigate } from 'react-router-dom';
import {TextInput} from './../components/FormLib'
import {  FiLock, FiMail } from 'react-icons/fi';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {Circles} from 'react-loader-spinner';
import {adminLogin} from './../auth/actions/userActions'
import { connect } from 'react-redux';
import Logo from './../assets/TracerExpress-Logo2.png'



const AdminLoginPage = ({adminLogin}) => {
  const navigate = useNavigate();
  return (
    <>
      <LoginContainer>
        <LoginForm>
          <FormWrapper>
          <Avatar image={Logo} formLogo={true}/>
          <Title formtitle={true}>For Bus Companies</Title>
          <Formik initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={
            Yup.object({
              email: Yup.string().required("required"),
              password: Yup.string().min(8, "Password is too short")
              .max(30, "Password exceed 30 characters").required("required")
            })
          }
          onSubmit={(values, {setSubmitting, setFieldError}) => {
            adminLogin(values, navigate, setFieldError, setSubmitting);

          }}
          >
          {({isSubmitting}) => 
         ( 
           <Form>
            <InputWrapper>
            <TextInput name="email" type="text" label="Email Address" icon={<FiMail/>} />
            <TextInput name="password" type="password" label="Password" icon={<FiLock/>}  />
            </InputWrapper>
            <FormBtnWwrapper>
              {!isSubmitting && (<FormBtn login={true} type='submit'>Login</FormBtn>)}
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

export default connect(null, {adminLogin}) (AdminLoginPage);
