import {Link} from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faLinkedinIn,faYoutube} from '@fortawesome/free-brands-svg-icons';
import headerJSON from './header.json';
import './header.scss';
import {useState, useEffect} from 'react';
import React from 'react';

function Header(){


  const [isClaimOpen,setIsClaimOpen]=useState(false);
  const [isBillOpen,setIsBillOpen]=useState(false);

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


 

  return (

    <div className="navHeader">

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
          <img src={require('../../../assets/images/header/logo.png').default}
           className="d-inline-block align-top" alt="React Bootstrap logo"/>{' '}
        </Navbar.Brand>
            <Nav className="ml-auto" id="my-nav">
              <Nav.Link className="mx-3 about" to="/about" >About us</Nav.Link>
              <Nav.Link className="mx-3 blog" href="#blog"  >Blog</Nav.Link>

              <NavDropdown className="mx-3 claim" href="#claim" title={<span style={{color:"white"}}>Claim</span>}
                onMouseOver={()=>{setIsClaimOpen(true)}} onMouseLeave={()=>{setIsClaimOpen(false)}} show={isClaimOpen}>
                  {
                    headerJSON.map((item) => {
                      return(
                        <Row>
                          {
                            item.claimOptions.map((link) => {
                              return(
                                 <NavDropdown.Item>
                                   {link.Option}
                                 </NavDropdown.Item>
                              )
                            })
                          }
                        </Row>
                      )
                    })
                  }
              </NavDropdown> 

              <NavDropdown className="mx-3 claim" href="#claim" title={<span style={{color:"white"}}>Pay a Bill</span>}
                onMouseOver={()=>{setIsBillOpen(true)}} onMouseLeave={()=>{setIsBillOpen(false)}} show={isBillOpen}>
                  {
                    headerJSON.map((item) => {
                      return(
                        <Row>
                          {
                            item.payBillOptions.map((link) => {
                              return(
                                 <NavDropdown.Item>
                                   {link.Option}
                                 </NavDropdown.Item>
                              )
                            })
                          }
                        </Row>
                      )
                    })
                  }
              </NavDropdown> 

          
              <Nav.Link className="mx-3 sign_in" href="#sign_in" >Sign In</Nav.Link>
              <Button className="mx-3 get-quote-button" variant="primary">
                <span className="get-quote">Get Quote</span>
              </Button>
            </Nav>
        </Navbar>
    </div>
  );
}
export default Header;