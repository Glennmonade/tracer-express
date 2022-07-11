import React from 'react'
import { SideBarContainer, SideBarList, SideBarListItem, SideBarListItemLink, SideBarMenu, SideBarTitle, SideBarWrapper } from './SideBarStyles'
import {Home, Group, Book, PersonAdd} from '@mui/icons-material';


const SideBar = () => {
  return (
    <>
        <SideBarContainer>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem>
                            <SideBarListItemLink to="/admin-dashboard/home">
                            <Home style={{marginRight: "5px", fontSize: "20px"}}/>
                            Home
                            </SideBarListItemLink>
                        </SideBarListItem>
                        <SideBarListItem>
                            <SideBarListItemLink  to="/admin-dashboard/digital-logbook">
                            <Book style={{marginRight: "5px", fontSize: "20px"}}/>
                            Digital Log-Book
                            </SideBarListItemLink>
                        </SideBarListItem>
                        <SideBarListItem >
                            <SideBarListItemLink to="/admin-dashboard/personnel-list">
                            <Group style={{marginRight: "5px", fontSize: "20px"}}/>
                            View Personnels
                            </SideBarListItemLink>
                        </SideBarListItem>
                        <SideBarListItem >
                            <SideBarListItemLink to="/admin-dashboard/add-personnel">
                            <PersonAdd style={{marginRight: "5px", fontSize: "20px"}}/>
                            Add Personnels
                            </SideBarListItemLink>
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    </>
  )
}

export default SideBar


{/* <SideBarMenu>
<SideBarTitle>Personnels</SideBarTitle>
<SideBarList>
    <SideBarListItem >
        <SideBarListItemLink to="/admin-dashboard/personnel-list">
        <Group style={{marginRight: "5px", fontSize: "20px"}}/>
        View Personnels
        </SideBarListItemLink>
    </SideBarListItem>
    <SideBarListItem >
        <SideBarListItemLink to="/admin-dashboard/add-personnel">
        <PersonAdd style={{marginRight: "5px", fontSize: "20px"}}/>
        Add Personnels
        </SideBarListItemLink>
    </SideBarListItem>
</SideBarList>
</SideBarMenu> */}