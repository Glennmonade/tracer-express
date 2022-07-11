import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import bg1 from "./../assets/LandingPageBg.png";
import { FaBars } from 'react-icons/fa';

const colors = {
    default: "#fff",
    primary: "#E33311",
    secondary: "#1126E3",
};
//Navigation
export const Nav = styled.nav`
    background: ${colors.default};
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem 10px;
    height: 100%;
    cursor: pointer;
    text-align: left;
    ${(props) => props.register === true && `
        text-decoration: underline;
        color: ${colors.secondary};
    `}

`
export const Bars = styled(FaBars)`
    display: none;
    colors: ${colors.primary};

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: -24px;
    @media screen and (max-width: 760px) {
        display: none;
    }
`
export const NavBtn = styled.div`

`

export const NavBtnLink = styled(Link)`

`
//WELCOME PAGE
export const Avatar = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
    ${(props) => props.formLogo === true && `
    width: 350px;
    height: 350px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`}
    ${(props) => props.navLogo === true && `
    width: 250px;
    height: 250px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;

    `}
`;
 //background:url(${bg1});
export const Container = styled.div`
    background: url(${bg1});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    ${(props) => props.info === true && `
    background: #fff;
    `}
    
`;
export const ContentContainer = styled.div`
    display: flex;
    padding: 10rem;
    @media screen and (max-width: 480px) {
        padding: 10rem 5px 5px 5px;
    }
`;
export const ContentWrapper = styled.div`
    padding-top: 0;
    justify-content: center;
    display: flex;
    flex-flow: column wrap;
    width: 100%;
`;
export const MenuWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    ${(props) => props.register === true && `
    `}
    ${(props) => props.signin === true && `
    background-color: transparent;
    `}
    @media screen and (max-width: 480px){
        padding: 0px;
    }
`;
export const MenuBtn = styled.button`
    width: 250px;
    height: 5em;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 10px;
    color: ${colors.default};
    font-szie: 16px;
    font-weight: 600;
    letter-spacing: 3px;
    cursor: pointer;
    background-color: ${colors.primary};


    ${(props) => props.register === true && `
    background-color: ${colors.primary};
    transition: all 0.2s ease-in-out;
    width: 100%;
    &:hover{
        box-shadow: 0px 5px 15px ${colors.primary};
        text-shadow: 0px 0px 7px ${colors.default};
    }
    `}
    ${(props) => props.signin === true && `
    background-color: ${colors.secondary};
    transition: all 0.2s ease-in-out;
    width: 100%;
    &:hover{
        box-shadow: 0px 5px 15px ${colors.secondary};
        text-shadow: 0px 0px 7px ${colors.default};
    }
    `}  
    
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`
export const Title = styled.h2`
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    justify-content: center;
    color: ${colors.default};
    ${(props) => props.formtitle === true && `
    text-align: left;
    margin-left: 3rem;
    color: #E33311;
    @media screen and (max-width: 480px){
        margin-left: 1rem;
    }
    `}
    ${(props) => props.profile === true && `
    color: #E33311;
    font-size: 30px;
    }
    `}
`
//FOOTER
export const Footer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #02121f;
    padding: 10px;
    @media screen and (max-width: 560px) {
        padding: 5px;
        height: 100px;
    }
`
export const FooterWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-flow: column wrap;
    width: 100%;

`;
export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 10px 10px 50px;

    @media screen and (max-width: 480px){
        padding: 40px 0 0 0;
    }
`;
export const FooterContent = styled.h2`
    font-size: 12px;
    text-align: left;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.default};

    @media screen and (max-width: 480px){
        font-size: 8px;

    }
`
//LOGIN PAGE
export const LoginContainer = styled.div`

`;
export const LoginForm = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 100vh;
`;
export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    padding: 10px 10px 10px 10px;
    ${(props) => props.signup === true && `
    padding-top: 30rem;
`}
    @media screen and (max-width: 480px){
    ${(props) => props.signup === true && `
    padding-top: 20rem;
`}}
    `;
export const InputWrapper = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-flow: column;
    align-items: center;
`
export const FormInput = styled.input`
    width: 350px;
    margin: 10px;
    height: 30px;
    border: 0;
    border-bottom: 2px solid ${colors.primary};
    outline: 0;
    border-radius: 5px;
    padding: 10px 10px 10px 30px;
    @media screen and (max-width: 480px){
        width: 300px;
    }
`;
export const FormLabel = styled.p`
    font-size: 12px;
    text-align: left;
`
export const FormBtn = styled.button`
    width: 165px;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    color: ${colors.default};
    font-szie: 16px;
    font-weight: 600;
    letter-spacing: 3px;
    cursor: pointer;
    ${(props) => props.login === true && `
        background-color: ${colors.primary};
        transition: all 0.2s ease-in-out;
        &:hover{
            box-shadow: 0px 5px 15px ${colors.primary};
            text-shadow: 0px 0px 7px ${colors.default};
        }
    `}
    ${(props) => props.cancel === true && `
    background-color: ${colors.secondary};
    transition: all 0.2s ease-in-out;
    &:hover{
        box-shadow: 0px 5px 15px ${colors.secondary};
        text-shadow: 0px 0px 7px ${colors.default};
    }
`}
@media screen and (max-width: 480px){
    width: 120px;
}
`;
export const FormBtnWwrapper = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
`;
export const StyledIcon = styled.p`
    color: ${colors.primary};
    position: absolute;
    font-size: 16px;
    top: 27px;
    ${(props) => props.right && `right: 15px;`};
    ${(props) => !props.right && `left: 15px;`};
`;
export const ErrorMsg = styled.div`
    font-size: 11px;
    background-color: ${colors.primarys};
    color: red;
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;
//Proifile Page
export const ProfileContainer = styled.div`
    background: #fff;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    padding: 2rem;
`;
export const ProfileContentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`;
export const ProfileContentWrapper = styled.div`
    padding: 10px 10px 10px 10px;
    justify-content: center;
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    align-items: center;
`;
export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 500px;
    padding: 0 10px 10px 10px;
    margin-bottom: 5px;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 680px){
        width: 100%;
    }
`
export const TextLink = styled(Link)`
    text-decoration: none;
    cursor: pointer
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    color: ${colors.primary};
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
    &:hover{
        text-shadow: 0px 0px 7px ${colors.primary};
        letter-spacing: 2px;
    }
`
//TOP BAR

export const TopBarContainer = styled.div`
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0;
    z-index: 999;

`
export const TopBarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TopLeft = styled.div`

`
export const TopRight = styled.div`
    display: flex;
    align-items: center;
`

export const AdminName = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: ${colors.primary};
    cursor: pointer;
`

export const TopBarIConContainer = styled.div`
    position: relative;
    margin-right: 30px;
    cursor: pointer;
    color: #555;
    transition: all 0.2s ease-in-out;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;

    &:hover{
        color: ${colors.primary};
    }
`


//Profile Topbar

export const ProfileTopBar = styled.div`
    background: #fff;
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0;
    z-index: 999;

`
export const ProfileTopBarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ProfileTopLeft = styled.div`

`
export const ProfileTopRight = styled.div`
    display: flex;
    align-items: center;
`

export const ProfileName = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: ${colors.primary};
    cursor: pointer;
`

export const ProfileTopBarIConContainer = styled.div`
    position: relative;
    margin-right: 30px;
    cursor: pointer;
    color: #555;
    transition: all 0.2s ease-in-out;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;

    &:hover{
        color: ${colors.primary};
    }
`

export const OtherPages = styled.div`
    flex: 4;
`

export const DashboardContainer = styled.div`
    display: flex;
    margin-top: 10px;
`


//Dashboard Home Style

export const DashboardHome = styled.div`
    flex: 4;

`
//HomeContent
export const HomeContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const HomeContentWrapper =styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 2px 4px 15px -2px rgba(0,0,0,0.42); 
    box-shadow: 2px 4px 15px -2px rgba(0,0,0,0.42);
`

export const HomeContentTitle = styled.span`
    font-size: 20px;
    color: #555;
    font-weight: 700;
`
export const ContentSubtitleContianer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`

export const HomeContentSubTitle = styled.span`
    font-size: 30px;
    font-weight: 600;
    color: #008000;
    ${(props) => props.severe === true && `
    color: #FF0000;
    }
`}
${(props) => props.mild === true && `
color: #FFA500;
}
`}
`

//Dashboard Digital Log-Book
export const DigitalLogBookContainer = styled.div`
    flex: 4;
`


//Charts

export const ChartsContainer = styled.div`
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 2px 4px 15px -2px rgba(0,0,0,0.42); 
    box-shadow: 2px 4px 15px -2px rgba(0,0,0,0.42);
`

export const ChartTitle = styled.h3`
    margin-bottom: 20px;
`

//Personnel List
export const PerListContainer = styled.div`
    flex: 4;
`

