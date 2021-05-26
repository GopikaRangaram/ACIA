import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './footer.scss';
import FooterList from './FooterList'
export default function Footer() {
 
return (
 
<Container fluid={'true'} className="footerContainer">
 
<Row fluid={'true'} className='footer-outer-Row mb-3'>
   
<Col className='footer-Column' lg={3}>
       <div className="aciaLogo" />
       <div className="description">ACIA is a complete insurance product solution that is pre packaged</div>
</Col>

<FooterList />
 
<Col className='footer-Column'>
      <div className="columnTitle py-0"><b>We're in Social</b></div>
      <Row fluid={'true'} className='pt-3 px-3'>
       <Col  lg={4} className="p-0"><Image className="facebook" src={require('../../../assets/images/footer/facebook.png').default} alt="facebook" /></Col>
       <Col  lg={4}  className="p-0 "><Image className="linkedIn" src={require('../../../assets/images/footer/linkedIn.png').default} alt="linkedIn" /></Col>
      </Row>
 
      <Row fluid={'true'} className='pt-3 px-3'>
        <Col  lg={4}  className="p-0"><Image className="twitter" src={require('../../../assets/images/footer/twitter.png').default} alt="twitter" /></Col>
        <Col  lg={4}  className="p-0"><Image className="youTube" src={require('../../../assets/images/footer/youtube.png').default} alt="youtube"/></Col>
      </Row>
 
</Col>
</Row>
 
<Row fluid={'true'} className='footer-outer-Row pt-3 pb-5'>
 
         <div className="alignText"> US & CAN: 1 - 855 -758-0984 </div>
         <div className="alignText"> Worldwide: +1-424-781-3315 </div>
 
</Row>
 
<Row lg={12} className='pt-3'>
<hr className="horizontalLine" />
<p className="py-4 bottomLine">All rights reserved. ACIA 2021</p>
</Row>
 
</Container>
  );
}