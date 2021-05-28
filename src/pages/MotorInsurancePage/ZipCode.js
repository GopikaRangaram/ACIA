import React, { useState, useEffect} from "react";
import * as actions from '../../actions/ZipList';
import { connect } from 'react-redux';
import { Container, Row, Col, Button} from 'react-bootstrap';


const ZipCode = ({...props}) => {


    const initialFieldValues = {
        zipCode: '',
        city: '',
        country: ''
    }


    useEffect(() => {
      props.fetchAllZipCodes()
    }, [])
    
    const [values, setValues] = useState(initialFieldValues)



  
    
   
    return (
        <Container fluid={'true'}>
                {

                    // get all the zip code and location
                    <Row>{
                    props.zipListlist.map((record) => {
                        return(
                            <Row>
                            <Col lg={4}>
                                ZipCode: {record.zipCode}
                            </Col>
                            <Col lg={4}>
                                City: {record.city}
                            </Col>
                            <Col lg={4}>
                                State/Country: {record.country}
                            </Col>
                            </Row>
                        )
                    })}
              </Row> } 
                {/* <Row>
                <form>
                    <Col lg={4}>
                        <input type='text' placeholder='zipCode'/>
                    </Col>
                    <Col lg={4}>
                        <input type='text' placeholder='City'/>
                    </Col>
                    <Col lg={4}>
                        <input type='text' placeholder='Country'/>
                    </Col>
                </form>
                </Row> */}
                   
                
                {/* <Button  onClick={loadAboutPolicyPage}>Go next</Button>   */}
        </Container>
    )
}


const mapStateToProps = state => ({
    zipListlist : state.ZipList.zipList
})
const mapActionToProps = {
    fetchAllZipCodes : actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(ZipCode);

