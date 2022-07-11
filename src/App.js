import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


const LoginPage = React.lazy(() => import("./pages/LoginPage"))
const WelcomePage = React.lazy(() => import("./pages/WelcomePage"))
const SignupPage = React.lazy(() => import("./pages/SignupPage"))
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"))
const ViewDetails = React.lazy(() => import("./pages/ViewDetails"))
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"))
const AdminLoginPage = React.lazy(() => import("./pages/AdminLoginPage"))
const AdminSignupPage = React.lazy(() => import("./pages/AdminSignupPage"))
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"))
const SuccessPage = React.lazy(() => import("./components/SuccessPage"))




function App() {
  return (
    <Router>
       <React.Suspense fallback="Loading...">
      <Routes>
       
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/commuter-login" element={<LoginPage/>}/>
        <Route path="/commuter-signup" element={<SignupPage/>}/>
        <Route path="/admin-login" element={<AdminLoginPage/>}/>
        <Route path="/admin-signup" element={<AdminSignupPage/>}/>
        <Route path="/admin-dashboard/*" element={<AdminDashboard/>}/>
        <Route path="/commuter-profile" element={<ProfilePage/>}/>
        <Route path="/profile/view-details" element={<ViewDetails/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
