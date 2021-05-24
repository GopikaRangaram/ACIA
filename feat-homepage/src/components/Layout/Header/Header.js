import {Link, useHistory} from 'react-router-dom';
import {Col, Row, Button, Navbar, Nav,ButtonGroup, DropdownButton, Dropdown, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faLinkedinIn,faYoutube} from '@fortawesome/free-brands-svg-icons';
import './header.scss';
import {useState, useEffect} from 'react';
import React from 'react';

function Header(){


  const [isOpen,setIsOpen]=useState(false);

  useEffect(()=>{

    window.addEventListener("resize", ()=>{
      if(window.outerWidth <= 991){
        document.getElementById("my-nav").style.display="contents";
      }
      else{
        document.getElementById("my-nav").style.removeProperty("display");
      }
    });

    window.addEventListener('scroll', 
    (e)=>{
      if (window.scrollY > 480) {
        document.getElementById("my-header").classList.add("fixed-top");
        document.getElementById("my-header").style.borderBottomLeftRadius="30px";
        document.getElementById("my-header").style.borderBottomRightRadius="30px";
        document.getElementById("my-header").style.background="indigo";
      } else {
        document.getElementById("my-header").classList.remove("fixed-top");
        document.getElementById("my-header").style.removeProperty("border-bottom-left-radius");
        document.getElementById("my-header").style.removeProperty("border-bottom-right-radius");
        document.getElementById("my-header").style.removeProperty("background");
      }
    });

  },[]);

  const history = useHistory();
  const loadMotorInusrancePage = () => {
   history.push('/motor-insurance');
 }

 

  return (

    <div className="header">

      <Navbar variant="light" expand="lg">
        <Navbar.Brand href="#home">
          <FontAwesomeIcon className="mx-3" icon={faEnvelope}/>
            <span className="envelope-icon">Loremipsum@aspiresys.com</span>{' '}
          <FontAwesomeIcon className="mx-3" icon={faMobileAlt}/>
          <span className="phone-icon">+91 123 456 7890</span>
        </Navbar.Brand>
          <Navbar.Text className="ml-auto">
            <FontAwesomeIcon className="mx-3" icon={faFacebookF}/>
            <FontAwesomeIcon className="mx-3" icon={faTwitter}/>
            <FontAwesomeIcon className="mx-3" icon={faLinkedinIn}/>
            <FontAwesomeIcon className="mx-3" icon={faYoutube}/>
          </Navbar.Text>
      </Navbar>

      <Navbar variant="dark" id="my-header" expand="lg"> 
        <Navbar.Brand className="mx-3" as={Link}  to="/">
          <img src={require('../../../assets/images/header/logo.png').default} className="d-inline-block align-top" alt="React Bootstrap logo"/>{' '}
        </Navbar.Brand>
            <Nav className="ml-auto" id="my-nav">
              <Nav.Link className="mx-3 about" to="/about" >About us</Nav.Link>
              <Nav.Link className="mx-3 blog" href="#blog"  >Blog</Nav.Link>
              <NavDropdown className="mx-3 claim" href="#claim" title={<span style={{color:"white"}}>Claim</span>} noCaret
                onMouseOver={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false)}} show={isOpen}> 
                <NavDropdown.Item>Menu Item 1</NavDropdown.Item>
                <NavDropdown.Item>Menu Item 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="mx-3 pay_a_bill" href="#pay_a_bill" >Pay a Bill</Nav.Link>
              <Nav.Link className="mx-3 sign_in" href="#sign_in" >Sign In</Nav.Link>
              <Button className="mx-3 get-quote-button" variant="primary">
                <span className="get-quote">Get a Quote</span>
              </Button>
            </Nav>
        </Navbar>

      <Row fluid>
        <Col xs={2} md={4} lg={6} className="mx-4">
          <p className="title1">Find the{' '}<span className="title2">Perfect</span></p>
          <p className="content">Connecting people through an easy to use web page application<br></br> built for all the device.</p>
          <div className="container-button">
            <div className="container" >
              <ButtonGroup style={{alignItems:"center"}}>
                <DropdownButton variant="light" title={<span className="dropdown-title1">Motor Insurance</span>} id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton variant="light" as={ButtonGroup} title={<span className="dropdown-title2">Vehicle Type</span>} id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <Button onClick={loadMotorInusrancePage}
                className="go-button" variant="light">
                  <span className="go" >Go{' '}&gt;</span>
                  </Button>
              </ButtonGroup>
            </div>     
          </div>
        </Col>
        <Col lg={1} />
        <Col className="family-image">
          <img src={require('../../../assets/images/header/family.png').default} width="375px" height="425px" alt="React Bootstrap logo"/>
        </Col>
      </Row>

    </div>
  );
}
export default Header;