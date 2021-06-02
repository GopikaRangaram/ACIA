import React from 'react';
import { Container,Row, Col, Button,
ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import '../../scss/styles/HomePage.scss';
import '../Layout/Header/header.scss';
import header from './homeHeader.json';
import { useHistory} from 'react-router-dom';





const HomeHeader = () => {


    let history = useHistory();
    function loadMotorInusrancePage(){
     history.push('/motor-insurance');
   }
  
   return (
    <Container fluid={'true'} className='header'>
    <Row>

        {
        header.map((item, item_index) => {
            return(
            <Row key={item_index}>
            <Col xs={2} md={4} lg={6} className="mx-4">
            <p className="title1">{item.Title1}{' '}<span className="title2">{item.Title2}</span></p>
            <p className="content">{item.content1}<br></br> {item.content2}</p>
            <div className="container-button">
                <div className="container" >
                
                <ButtonGroup style={{alignItems:"center"}}>              
                    {
                    item.dropdown.map((list, list_index) => {
                        return(
                        <DropdownButton variant="light" title={list.DropdownName} 
                        key={list_index}
                        id="bg-nested-dropdown">
                        {
                            list.DropdownLink.map((link, link_index) => {
                            return(
                                <Dropdown.Item
                                key={link_index}>
                                {link.dropdownslink}
                                </Dropdown.Item>
                            )
                            }) 
                        }
                        </DropdownButton>
                        )
                    })
                    }
                    <Button onClick={loadMotorInusrancePage}
                    className="go-button px-3" variant="light">
                        <span className="go" >Go{' '}&gt;</span>
                    </Button>
                </ButtonGroup>
                </div>     
            </div>
            </Col>

            
            <Col className="header-image">
            <img src={require(`../../assets/images/header/${item.imagename}.png`).default}
            alt={item.imagename}/>
            </Col>
        </Row>
            )
        })

    } 
    </Row>
    </Container>

   )
}


export default HomeHeader;