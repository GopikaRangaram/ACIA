import React from 'react';
import { Container, Card, Image, Row, Col} from 'react-bootstrap';
import '../../scss/styles/MotorInsurancePage.scss';
import insuranceType from './motorInsuranceTypes.json';

const MotorInsuranceTypes = () => {

return(

    <Card className='insurance-types-card mt-5'>
    <Container className='insurance-types-container my-5 py-5'>
            
            {
                insuranceType.map((item, item_index) =>
                {
                return(
                    <Row className='pb-3' key={item_index}>
                    <Col lg={2}>
                    <Image className="insurance-types-img"
                    src={require ('../../assets/images/motorInsurancepage/insuranceType.png').default} alt=""/>
                    </Col>
                    <Col lg={10}>
                    <p className="insurance-types-point">{item.type}</p>
                    <p className="insurance-types-bulletpoints">{item.description}</p>  
                    </Col>
                    </Row>
                
                )
                })
            }

        
    </Container>
    </Card>


)

}


export default MotorInsuranceTypes;