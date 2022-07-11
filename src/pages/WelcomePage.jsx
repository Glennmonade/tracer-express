import React from 'react';
import {  Container, ContentContainer, MenuBtn, Nav,  NavMenu, NavLink, Footer} from '../components/styles';
import {useNavigate} from 'react-router-dom';


const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Nav>
      <NavLink to="/">
        <img style={{width: "250px", height: "250px"}} src={require('../assets/TracerExpress-Logo2.png')} alt="Logo"/>
      </NavLink>
      <NavMenu>
        <NavLink to="/">
            About Us
        </NavLink>
        <NavLink to="/">
            Contact Us
        </NavLink>
        <NavLink to="/">
            Privacy And Policy
        </NavLink>
      </NavMenu>
    </Nav>
    <Container>
      <ContentContainer>
        <div style={{flex: 1, padding: "10px 10px", borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.3)", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", border: "1px solid rgba(255, 255, 255, 0.18)"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <h1 style={{textAlign: "center", color: "#E33311"}}>Commute Safely. Prevent the spread of COVID-19.</h1>
          </div>
          <p style={{textAlign: "center", fontSize: "24px"}}>Join us to help our community manage COVID-19 data.</p>
          <br/>
          <hr/>
          <br/>
          <p style={{textAlign: "center",  color: "#E33311"}}>For personal use of the app</p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MenuBtn signin={true} onClick={async() => navigate("/commuter-login")}>Continue</MenuBtn>
          </div>
          </div>
        <div style={{flex: 1}}>
          </div>
      </ContentContainer>
    </Container>

    <Container info={true}>
      <ContentContainer>
      <div style={{flex: 1, padding: "10px 10px", borderRadius: "20px", marginRight: "2rem"}}>
        <img style={{width: "250px", height: "250px", borderRadius: "50%", border: "1px solid #E33311"}} src={require('../assets/bus-seating.jpg')} alt="Logo"/>
          <p style={{textAlign: "center", fontSize: "20px", fontWeight: "bold"}}>Protect Ourselves</p>
          <p style={{textAlign: "center"}}>We can protect ourselves from COVID-19 by mainting social distance especially when commuting, and also by following safety guidelines.</p>
      </div>

      <div style={{flex: 1, padding: "10px 10px", borderRadius: "20px", marginRight: "2rem"}}>
      <img style={{width: "250px", height: "250px", borderRadius: "50%", border: "1px solid #E33311"}} src={require('../assets/contact-tracing.jpg')} alt="Logo"/>
          <p style={{textAlign: "center", fontSize: "20px", fontWeight: "bold"}}>Protect Other Commuters</p>
          <p style={{textAlign: "center"}}>We can protect other commuters by sharing this app. The more people will use Tracer Express, the more we can protect each other.</p>
      </div>

      <div style={{flex: 1, padding: "10px 10px", borderRadius: "20px"}}>
      <img style={{width: "250px", height: "250px", borderRadius: "50%", border: "1px solid #E33311"}} src={require('../assets/community.jpg')} alt="Logo"/>
          <p style={{textAlign: "center", fontSize: "20px", fontWeight: "bold"}}>Protect Our Community</p>
          <p style={{textAlign: "center"}}>We can contribute to the national level tracing of COVID-19 by using Tracer Express in our own communities. Let's help each other, let's beat COVID-19</p>
      </div>

      </ContentContainer>

    </Container>

    <Container>
      <ContentContainer>
      <div style={{flex: 1, padding: "10px 10px", borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.3)", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", border: "1px solid rgba(255, 255, 255, 0.18)"}}>
        <p style={{textAlign: "left", marginLeft: "1.5rem"}}>For Bus Companies</p>
          <div style={{display: "flex", justifyContent: "center"}}>
            <h1 style={{textAlign: "center", color: "#E33311"}}>Protect Your Commuters and Drivers!</h1>
          </div>
          <p style={{textAlign: "center", fontSize: "24px"}}>Get Tracer Express admin access now!</p>
          <br/>
          <hr/>
          <br/>
          <p style={{textAlign: "left", marginLeft: "1.5rem"}}>Create your account by clicking Register.</p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MenuBtn register={true} onClick={async() => navigate("/admin-signup")}>Register</MenuBtn>
          </div>
          <br/>
          <p style={{textAlign: "left", marginLeft: "1.5rem"}}>Already have an account?</p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MenuBtn signin={true} onClick={async() => navigate("/admin-login")}>Log in to your account</MenuBtn>
          </div>
          </div>
        <div style={{flex: 1}}>
          </div>
      </ContentContainer>
    </Container>
    <div style={{width: "100%", height: "150px"}}></div>
    <Footer>
      <div style={{display: "flex"}}>
        <div style={{flex: 1, justifyContent: "center", padding: "15px"}}>
        <p style={{textAlign: "center", fontSize: "12px", color: "#fff"}}>Developed By:</p>
        <p style={{textAlign: "center", fontSize: "18px", color: "#fff"}}>DevDreamers</p>
        </div>
        <div style={{flex: 1, justifyContent: "center", padding: "15px"}}>
        <p style={{textAlign: "center", fontSize: "12px", color: "#fff"}}>&copy; 2022 Tracer Express All Rights Reserved</p>
        </div>
        <div style={{flex: 1}}>3</div>

      </div>
    </Footer>

    </>
  );
};

export default WelcomePage;

