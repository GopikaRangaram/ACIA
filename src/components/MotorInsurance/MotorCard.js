import React from 'react';
import { Container, Card, CardColumns,Row, Col} from 'react-bootstrap';
import '../../scss/styles/MotorInsurancePage.scss';
import motorCard from './motorCard.json';

const MotorCard = () => {

    return(

        <Container fluid={'true'}>

        <Row>
        <div className="key-benefits-cardheading pb-2">Key benefits of our Additional Coverages</div>
        <div className="key-benefits-cardcontent pb-2">
        se our extensive choice of additional coverages to enjoy roadside assistance during breakdown, protection for your accessories, and our extended network of partners to arrange for accommodation, medical aid and financial assistance.
        </div>
            {
            motorCard.map((items, items_index) =>
            {
                return(
                <Col lg={6} xs={12} md={12} key={items_index} className='py-3'>
                <CardColumns className='cardColumn'>
                <Card className='cardLayout'>
                <Card.Img className='cardImage'
                src={require (`../../assets/images/motorInsurancepage/${items.cardImage}.png`).default} 
                alt={items.cardImage}
                />

                <Card.Body>
                    <Card.Title className='cardTitle'>{items.cardTitle}</Card.Title>
                    <Card.Text className='cardText'>{items.cardText}</Card.Text>
                </Card.Body>
                </Card>
            </CardColumns>
            </Col>
            )
        }
            )
        }
        </Row>
        </Container>

    )

}


export default MotorCard;