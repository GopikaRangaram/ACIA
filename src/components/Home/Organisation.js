import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import '../../scss/styles/HomePage.scss';
import organisation from './organisation.json';


const Organisation = () => {

return(

    <Container fluid={'true'} className="organisation-container my-3 mx-2" >  
    <Row fluid={'true'} className='py-5'>
    {
      organisation.map((item, item_index) => {
      return(
        <Col className='px-5' lg={3} xs={12} md={6} key={item_index}>
          <Image className={item.organisation}
          src={require(`../../assets/images/homepage/${item.organisation}.png`).default}
          alt={item.organisation}/>
        </Col>
        );
      })
    } 
    </Row>
  </Container>

)

}


export default Organisation