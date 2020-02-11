import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  NavLink
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Item, Button, Container, Row, Col, Image,  Link } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'



import './App.css';



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
        <Navbar  expand="md" collapseOnSelect>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="buttonNav">
            <Nav.Link href="/home" defaultActiveKey="/home" to="/home"  className="buttonWrap">HOME</Nav.Link>
            <Nav.Link to="/about"  href="/about" className="buttonWrap">ABOUT</Nav.Link>
            <Nav.Link to="/projects"  href="https://github.com/xcob" className="buttonWrap">GITHUB</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
    </Router>
  );
}



function Home() {
  return (
  
       <Container >
          <Row>
            <Col xs={{ span: 10, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 5, offset: 0 }}>
              <div className="infoSection">
                <h1 className="hello">Hello!</h1>
                <h3>My Name is Jacob Smith.</h3>
                <h3>I'm a <span className="emphasisText">Software Engineer</span> based out of Birmingham, Alabama.</h3>
              </div>
            </Col>
            <Col xs={{ span: 1, offset: 0 }} className="d-none d-md-block" md={{ span: 6, offset: 0 }} lg={{ span: 4, offset: 0 }}>
                <Image className="profile" src="JacobSmith_circlelines.png" roundedCircle fluid  /> 
              </Col>
          </Row>
      
      
        <div className="circleDiv"></div>
          <Image src="Lines.png" className="linesBgTop" roundedCircle fluid  />
        <div >
        
        </div>  
       <div className="" style={{ overflow: 'hidden'}}>
         <Image src="Lines.png" className="linesBgBot" roundedCircle fluid  />
       </div>
       </Container>
      
     
   
  );
}

function About() {
  return (
    <Container>
    <Row className="aboutRow">
      <Col xs={{ span: 12, offset: 0 }} md={{ span: 5, offset: 0 }} lg={{ span: 5, offset: 0 }}> 
        <h2>About</h2>  
        
        <p>I have been working in Birmingham for over a year helping solve real world problems for some of Birmingham's biggest organizations.</p>
        <p>When I'm not saving a local business from utter disaster, I am chuggin along with my own projects, watching a hockey game, or experimenting in the kitchen.</p>
        <p>I developed a solid coding foundation at Jefferson State Community College, taking their Full Stack Web Development course over the summer of 2018.</p>
        <p>Since then I have been working at Bell Media, handling anything from bugfixes and custom functionality to website launches and SEO integration.</p>
       
      </Col>
      <Col xs={{ span: 12, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}> 
        <Row className="techRow">
          <Col xs={{ span: 12, offset: 0 }}  md={{ span: 6, offset: 0 }}>
            <h3>HTML / CSS</h3>
          </Col>
          <Col xs={{ span: 8, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className="HTMLDiv">  <span></span></div>
          </Col>
          <Col xs={{ span: 12, offset: 0 }}  md={{ span: 6, offset: 0 }}>
            <h3>Javascript</h3>
          </Col>
          <Col xs={{ span: 8, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className="HTMLDiv">  <span></span></div>
          </Col>
          <Col xs={{ span: 12, offset: 0 }}  md={{ span: 6, offset: 0 }}>
            <h3>Wordpress</h3>
          </Col>
          <Col xs={{ span: 8, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className="HTMLDiv">  <span></span></div>
          </Col>
          <Col xs={{ span: 12, offset: 0 }}  md={{ span: 6, offset: 0 }}>
            <h3>PHP/MySQL</h3>
          </Col>
          <Col xs={{ span: 8, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className="JavascriptDiv">  <span></span></div>
          </Col>
          <Col xs={{ span: 12, offset: 0 }}  md={{ span: 6, offset: 0 }}>
            <h3>Bootstrap/Materialize</h3>
          </Col>
          <Col xs={{ span: 8, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className="JavascriptDiv">  <span></span></div>
          </Col>
          <Col xs={{ span: 12, offset: 0 }}  md={{ span: 6, offset: 0 }}>
            <h3>DNS Management</h3>
          </Col>
          <Col xs={{ span: 8, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className="dnsDiv">  <span></span></div>
          </Col>
          <Col xs={{ span: 12, offset: 0 }}  md={{ span: 6, offset: 0 }}>
            <h3>React</h3>
          </Col>
          <Col xs={{ span: 8, offset: 0 }} md={{ span: 6, offset: 0 }}>
            <div className="reactDiv">  <span></span></div>
          </Col>
         
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs={{ span: 12, offset: 0 }}>
        <p> <span className="emphasisText">Slack - VSCode - CloudFlare - Google Suite - CyberDuck - ConnectWise - Expo</span> </p>
      </Col>
    </Row>
    
    <div>
     
      {/* <div className="circleDiv"></div> */}
        <Image src="Lines.png" className="linesBgTop" roundedCircle fluid  />
       
       <div className="">
         <Image src="Lines.png" className="linesBgBot" roundedCircle fluid  />
       </div>
      
    </div>

  </Container>
   
  );
}

function Projects() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      

    </Container>
    
  );
}