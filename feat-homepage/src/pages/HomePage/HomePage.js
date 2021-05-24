import React, { Fragment } from 'react'
import '../../scss/styles/HomePage.scss';
import '../../scss/styles/MotorInsurancePage.scss';
import { Container, Card, Image, Row, Col, Button} from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';
import cardContent from './cardContent.json';
import organisation from './homepage.json';

export default function HomePage() {

return (
<Fragment>

<Container fluid className="car-description-container">
<Row fluid>
  <Col lg={6}>
    <Image
      className="car-image"
      src={require ('../../assets/images/homepage/family2.png').default}
      alt=""
    />
  </Col>

  <Col lg={6} xs={true} md={true} className="mt-5 pr-5 pt-5">

    <div className="car-firstRow-firstPart  pt-5  pb-2">
      Find the
      <span className="car-firstRow-secondPart">
        {' '} Right Motor insurance for your family
      </span>
    </div>

    <div className="car-secondRow py-2">
      Life throws many unexpected things at all of us. While we usually
      can't stop these things from occuring. we can opt to give our live
      a bit of protection. Insurance is meant to give us some measure of
      protection, at least financially, should a disaster happen There
      are numerous insurance options available, and many financial
      experts tell us that we need to have those insurance policies in
      place Yet, with so many options, it can be difficult to determine
      what insurance you really need. Purchasing the right insurance is
      always determined by your specific situation Here comes the best
      choice.
    </div>

  </Col>
</Row>

</Container>
<Container fluid className="car-description-container">

<Row fluid>

  <Col xs={6} md={4} lg={4} className="mt-5 pl-5 pr-0 pt-5">

    <div className="car-firstRow-firstPart  pt-5 pl-0 pb-2">
      Free Quote and
      {' '}
      <span className="car-firstRow-secondPart  ">
        {' '}Instant Online Cover
      </span>
    </div>

    <div className="car-secondRow py-2 ">
      Life throws many unexpected things at all of us. While we  usually
      can't stop these things from occuring. we can opt to give our live
      a bit of protection. Insurance is meant to give us some measure of
      protection, at least financially, should a disaster happen There
      are numerous insurance options available, and many financial
      experts tell us that we need to have those insurance policies in
      place Yet, with so many options, it can be difficult to determine
      what insurance you really need. Purchasing the right insurance is
      always determined by your specific situation Here comes the best
      choice.
    </div>

  </Col>
  <Col xs={4} md={4} lg={8} >
    <Image
      className="car-image"
      src={require ('../../assets/images/homepage/family3.png').default}
      alt=""
    />
  </Col>
</Row>
</Container>




  {/* ----------------------------------------------Get Quote------------------------------------------------*/}

<Fragment>
<Container fluid className="quote-container my-5">

<Row  className='quote-inner-container mx-5 py-5'>
    <Col lg={7}  className='px-5'>
    <div className="quote-textArea pt-5 pb-3">Exception Customer Service</div>
    <div className="quote-innerTextArea py-3">
    All of our client care team works in our office ands is an experienced web meeting user
   ready to help you. Never outsourced.
    </div>
    <div className='pt-3 pb-5'>
    <Button className="quote-Button">Get Quote Now</Button>
    </div>
    </Col>
</Row>
<Row>
    <Col lg={7}></Col>
    <Col className='quote-imageArea' lg={5}>
    <Image src={require('../../assets/images/homepage/ExceptionCustomerService.png').default} alt=""/>
    </Col>
</Row>
</Container>

</Fragment>

{/* ----------------------------------------------------------------------------------------------------------- */}
        <Container>
            <h1 className="card-heading py-3">
              <b>Our Awesome Benefits</b>
            </h1>
            <Row>
              {
                cardContent.map((item) => {

                  return(
                    <Col lg={4} xs={12} md={6} className="cardColumn pb-5">
                    <Card className="cardLayout">
                    <Image className="cardImage"
                      src={require(`../../assets/images/homepage/${item.cardImage}.png`).default}
                      alt={item.cardImage} /> 
                      <Card.Body>
                        <Card.Title className="cardTitle pt-2"> { item.cardTitle } </ Card.Title>
                        <Card.Text className="cardText">
                        { item.cardText }
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    </Col>
                  )
                })
              }

            </Row>
        </Container>








{/* -------------------------------------------Join with Us------------------------------------------------ */}
    
    <Container fluid className="join-container" >
    <Row fluid>
        <Col lg={12} className='m-5 p-5 '>
             
        <div  className="join-inLineHead px-5 py-3">
        Choose, Get Quote & Buy Simply
        </div>

        <div className="join-container-description px-5 py-3">
        Lorem ipsum dolor sit amet, 
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         </div>
         
         <div className='px-5 py-3' style={{textAlign:"center"}}> 

         <Button className="join-Btn px-3 py-2">Join with Us
            <ArrowRight  className="arrow" />
         </Button>

         </div>

        </Col>
    </Row>
    </Container>
   

                    {/* -------------------------------Organisation------------------------------------------ */}

    <Container fluid className="organisation-container my-3 mx-2" >  
      <Row fluid className='py-5'>
      {
        organisation.map((item) => {
        return(
          <Col className='px-5' lg={3} xs={12} md={6}>
            <Image className={item.organisation}
            src={require(`../../assets/images/homepage/${item.organisation}.png`).default}
            alt={item.organisation}/>
          </Col>
          );
        })
      } 
      </Row>
    </Container>
</Fragment>

  )
}
