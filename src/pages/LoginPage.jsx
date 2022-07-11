import React from 'react';
import { FormBtn, FormBtnWwrapper,  FormWrapper, InputWrapper, LoginContainer, LoginForm, Title, Avatar, NavLink } from '../components/styles';
import { useNavigate } from 'react-router-dom';
import {TextInput} from './../components/FormLib'
import { FiUser, FiLock } from 'react-icons/fi';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {Circles} from 'react-loader-spinner';
import {loginCommuter} from './../auth/actions/userActions'
import { connect } from 'react-redux';
import Logo from './../assets/TracerExpress-Logo2.png'



const LoginPage = ({loginCommuter}) => {
  const navigate = useNavigate();
  return (
    <>
      <LoginContainer>
        <LoginForm>
          <FormWrapper>
          <Avatar image={Logo} formLogo={true}/>
          <Title formtitle={true}>Log in as commuter</Title>
          <Formik initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={
            Yup.object({
              username: Yup.string().required("required"),
              password: Yup.string().min(8, "Password is too short")
              .max(30, "Password exceed 30 characters").required("required")
            })
          }
          onSubmit={(values, {setSubmitting, setFieldError}) => {
            loginCommuter(values, navigate, setFieldError, setSubmitting);

          }}
          >
          {({isSubmitting}) => 
         ( 
           <Form>
            <InputWrapper>
            <TextInput name="username" type="text" label="Username" icon={<FiUser/>} />
            <TextInput name="password" type="password" label="Password" icon={<FiLock/>}  />
            <NavLink register={true} to="/commuter-signup">Click here to register</NavLink>
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

export default connect(null, {loginCommuter}) (LoginPage);
