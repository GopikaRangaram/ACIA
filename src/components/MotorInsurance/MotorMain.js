import React, {Fragment} from 'react';
import '../../scss/styles/HomePage.scss';
import '../../scss/styles/MotorInsurancePage.scss';
import { Container, Image, Row, Col, Button} from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';
import MotorHeader from './MotorHeader';
import MotorCard from './MotorCard';
import MotorInsuranceTypes from './MotorInsuranceTypes';



const MotorMain = () => {

return(

<Fragment>


<MotorHeader />

<Container fluid={'true'} className="car-description-container">

<Row fluid={'true'} >
    <Col lg={6}>
    <Image className='car-image' src={ require('../../assets/images/Group 224.png').default } alt="" />
    </Col>

<Col lg={6} xs={true} md={true}  className='mt-5 pr-5 pt-5'>
    
<div className="car-firstRow-firstPart  pt-5  pb-2">Find the
<span className="car-firstRow-secondPart">{' '} Right Motor insurance for your family</span>
</div>

<div className='car-secondRow py-2'>ACIA insures your vehicles against losses caused by events outside of your control.
This includes vehicle damages caused due to an accident while driving or to your stationary vehicle caused by a fire or theft.So do we.
However if something goes wrong,having Motor insurance can help protect your financial future.
That's where ACIA can help. We focus on what matters. 
</div>

<div className='car-thirdRow pt-3'>
Free Quote and Instant Online Cover  
</div>

<div className='car-fourthRow pt-2'>
<ul className='list-unstyled'>
<li> - High-quality motor cover at an affordable price;</li>
<li> - Fast, fair and efficitent handling of all your claims;</li>
<li>- A global team of experts that puts your safety and wel l-being first;</li>
<li>- 24 hour emergency assistance from our team of experienced vehicle assistance providers.</li></ul>
</div>
</Col>
</Row>
 
</Container>


<MotorCard />

<MotorInsuranceTypes />


<Container fluid={'true'} className="join-container" >
<Row fluid={'true'}>
    <Col lg={12} className='m-5 p-5 '>
         
    <div  className="join-inLineHead px-5 py-3">
    So what are you waiting for ?
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


</Fragment>

)

}

export default MotorMain;

