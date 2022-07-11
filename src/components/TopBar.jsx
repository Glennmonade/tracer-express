import React from 'react'
import { AdminName, TopBarContainer, TopBarIConContainer, TopBarWrapper, TopLeft, TopRight } from './styles'
import {connect} from 'react-redux';
import { logoutAdmin } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';
import {Logout, Person} from '@mui/icons-material';



const TopBar = ({user, logoutAdmin}) => {

  const navigate = useNavigate();
  return (
    <>
    <TopBarContainer>
      <TopBarWrapper>
        <TopLeft>
          <AdminName>{user.busName}</AdminName>
        </TopLeft>
        <TopRight>
          <TopBarIConContainer>
           <Person style={{marginRight: "5px"}}/>My Account
          </TopBarIConContainer>
          <TopBarIConContainer onClick={async () => logoutAdmin(navigate)}>
              <Logout style={{marginRight: "5px"}}/>Log Out
          </TopBarIConContainer>
        </TopRight>
      </TopBarWrapper>
    </TopBarContainer>
 
    </>
  )
}

const mapStateToProps = ({session}) => ({
  user: session.user
})

export default connect(mapStateToProps, {logoutAdmin}) (TopBar);