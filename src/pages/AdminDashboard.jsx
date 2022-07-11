import React from 'react'
import {Routes, Route} from "react-router-dom";
import { DashboardContainer} from '../components/styles';

const TopBar = React.lazy(() => import("../components/TopBar"))
const SideBar = React.lazy(() => import("../components/SideBar"))

const Home = React.lazy(() => import("../dashboard/Home"))
const DigitalLogBook = React.lazy(() => import("../dashboard/DigitalLogBook"))
const PersonnelList = React.lazy(() => import("../dashboard/PersonnelList"))
const AddPersonel = React.lazy(() => import("../dashboard/AddPersonel"))




const AdminDashboard = () => {
  return (
 
    <div>
      <TopBar/>
      <DashboardContainer>
      <>
      <SideBar/>
      <React.Suspense fallback="Loading..">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="digital-logbook/*" element={<DigitalLogBook/>}/>
        <Route path="personnel-list/*" element={<PersonnelList/>}/>
        <Route path="add-personnel/*" element={<AddPersonel/>}/>
      </Routes>
      </React.Suspense>
      </>
      </DashboardContainer>
    </div>

  )
}


export default AdminDashboard;


/* import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import Home from '../dashboard/Home';
import DigitalLogBook from '../dashboard/DigitalLogBook';
import PersonnelList from '../dashboard/PersonnelList';
import AddPersonel from '../dashboard/AddPersonel'; */