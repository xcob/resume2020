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
          <Nav>
            <Nav.Link href="/home" defaultActiveKey="/home" to="/home"  className="buttonWrap">HOME</Nav.Link>
            <Nav.Link to="/about"  href="/about" className="buttonWrap">ABOUT</Nav.Link>
            <Nav.Link to="/projects"  href="https://github.com/xcob" className="buttonWrap">GITHUB</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
    
        <Switch>
          <Route exact path="/home">
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

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
  
       <Container>
          <Row>
            <Col>
              <div className="infoSection">
                <h2>Hello!</h2>
                <h3>I'm Jacob Smith</h3>
                <h3>I'm a <span className="emphasisText">Web Developer</span> based out of Birmingham Alabama</h3>
              </div>
            </Col>
          </Row>
      
      
        <div className="circleDiv"></div>
        <Image src="Lines.png" className="linesBgTop" roundedCircle fluid  />
        <div >
          <Col xs={{ span: 7, offset: 3 }} md={{ span: 6, offset: 4 }} lg={{ span: 4, offset: 4 }}>
            <Image src="JacobSmith_circle.png" roundedCircle fluid  />
          
            
          </Col>
        </div>  
       <div className="homeContainer">
         <Image src="Lines.png" className="linesBgBot" roundedCircle fluid  />
       </div>
       </Container>
      
     
   
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>lorem </p>
    </div>
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