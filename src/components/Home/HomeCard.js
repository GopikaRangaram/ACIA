import React from 'react';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import '../../scss/styles/HomePage.scss';
import cardContent from './homeCard.json';

const HomeCard = () => {

    return (

        <Container>
        <h1 className="card-heading py-3">
          <b>Our Awesome Benefits</b>
        </h1>
        <Row>
          {
            cardContent.map((item, item_index) => {

              return(
                <Col lg={4} xs={12} md={6} key={item_index} className="cardColumn pb-5">
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


    )
}


export default HomeCard;