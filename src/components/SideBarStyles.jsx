import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';



const colors = {
    default: "#fff",
    primary: "#E33311",
    secondary: "#1126E3",
};

export const SideBarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    position: sticky;
    top: 50;
    background-color: rgba(251, 251, 255);
`

export const SideBarWrapper = styled.div`
    padding: 20px;
`

export const SideBarMenu = styled.div`
    margin-bottom: 10px;
`
export const SideBarTitle = styled.h3`
    color: ${colors.secondary};
`

export const SideBarList = styled.ul`
color: #555;

`

export const SideBarListItem = styled.li`
    padding: 5px;
    list-style: none;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

export const SideBarListItemLink = styled(Link)`
cursor: pointer;
display: flex;
align-items: left;
text-align: left;
text-decoration: none;
color: #555;
padding: 5px;
border-radius: 10px;
width: 100%;



&:hover{
    background-color: rgba(240, 240, 255);
    color: ${colors.primary};
}
&.active{
    background-color: rgba(240, 240, 255);
}

`