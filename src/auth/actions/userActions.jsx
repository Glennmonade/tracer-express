import axios from 'axios';
import { sessionService } from 'redux-react-session';

export const loginCommuter =  (credentials, navigate, setFieldError, setSubmitting) => {
    return async () => {
        const loginUrl = "https://pure-cliffs-59602.herokuapp.com/commuter/signin";

        axios.post(loginUrl, credentials, {
            headers:{
                "Content-Type": "application/json",
            },
        }).then((response) => {
            const {data} = response;

            if (data.status === "Failed") {
                const {message} = data;

                if (message.includes("Credentials")) {
                    setFieldError("username", message);
                    setFieldError("password", message);
                } else if (message.includes("Password")) {
                    setFieldError("password", message);
                } else if (message.includes("username")) {
                    setFieldError ("username", message)
                }
            } else if (data.status === "Success") {
                const userData = data.data[0];
                const token = userData._id;

                sessionService.saveSession(token)
                .then(() => {
                    sessionService.saveUser(userData)
                    .then(() => {
                        
                        navigate("/success");
                    }).catch(err => console.error(err));
                }).catch(err => console.error(err));
            }setSubmitting(false);
        }).catch(err => console.error(err));
    }

};

export const signupCommuter =  (credentials, navigate, setFieldError, setSubmitting) => {
    return  (dispatch) => {
        const signupUrl = "https://pure-cliffs-59602.herokuapp.com/commuter/signup";
        axios.post(signupUrl, credentials, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            const {data} = response;

            if(data.status === "Failed") {
                const {message} = data.message;

                if (message.includes("Username")) {
                    setFieldError("username", message)
                } else if (message.includes("Password")){
                    setFieldError("password", message)
                }setSubmitting(false);
            } else if (data.status === "Success") {
                const {username, password} = credentials;

                dispatch(loginCommuter({username, password}, navigate, setFieldError,
                    setSubmitting));

                setSubmitting(false);
            }
            
        }).catch((err) => console.error(err));
    }
}

export const logoutCommuter =  (navigate) => {
    return  () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        navigate('/commuter-login', {replace: true});
    }

}


export const adminLogin =  (credentials, navigate, setFieldError, setSubmitting) => {
    return async () => {
        const loginUrl = "https://pure-cliffs-59602.herokuapp.com/admin/admin-signin";

        axios.post(loginUrl, credentials, {
            headers:{
                "Content-Type": "application/json",
            },
        }).then((response) => {
            const {data} = response;

            if (data.status === "Failed") {
                const {message} = data;

                if (message.includes("Credentials")) {
                    setFieldError("email", message);
                    setFieldError("password", message);
                } else if (message.includes("Password")) {
                    setFieldError("password", message);
                } else if (message.includes("email")) {
                    setFieldError ("email", message)
                }
            } else if (data.status === "Success") {
                const userData = data.data[0];
                const token = userData._id;

                sessionService.saveSession(token)
                .then(() => {
                    sessionService.saveUser(userData)
                    .then(() => {
                        navigate("/admin-dashboard");
                    }).catch(err => console.error(err));
                }).catch(err => console.error(err));
            }setSubmitting(false);
        }).catch(err => console.error(err));
    }

};


export const adminSignup =  (credentials, navigate, setFieldError, setSubmitting) => {
    return (dispatch) => {
        const signupUrl = "https://pure-cliffs-59602.herokuapp.com/admin/admin-signup";
        axios.post(signupUrl, credentials, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            const {data} = response;

            if(data.status === "Failed") {
                const {message} = data;

                if (message.includes("email")) {
                    setFieldError("email", message)
                } else if (message.includes("password")){
                    setFieldError("password", message)
                }setSubmitting(false);
            } else if (data.status === "Success") {
                const {email, password} = credentials;

                dispatch(adminLogin({email, password}, navigate, setFieldError,
                    setSubmitting));

                setSubmitting(false);
            }
            
        }).catch((err) => console.error(err));
    }
}

export const logoutAdmin =  (navigate) => {
    return  () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        navigate('/admin-login', {replace: true});
    }

}


export const addPersonnel =  (credentials, navigate, setFieldError, setSubmitting) => {

        const signupUrl = "https://pure-cliffs-59602.herokuapp.com/admin/add-subadmin";
        axios.post(signupUrl, credentials, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            const {data} = response;

            if(data.status === "Failed") {
                const {message} = data.message;

                if (message.includes("username")) {
                    setFieldError("username", message)
                } else if (message.includes("password")){
                    setFieldError("password", message)
                }setSubmitting(false);
            } else if (data.status === "Success") {
                alert("Personnel Added");
                window.location.reload(true);
                setSubmitting(false);
            }
            
        }).catch((err) => console.error(err));

}



/* export const updateHealtStatus = (credentials) => {

    axios.put(`https://pure-cliffs-59602.herokuapp.com/user/${qrId}`, {

    })
} */