import React, { useEffect} from "react";
import * as actions from '../../actions/ZipList';
import { connect } from 'react-redux';
import { Container, Row, Col} from 'react-bootstrap';

const ZipCode = ({...props}) => {

    useEffect(() => {
      props.fetchAllZipCodes()
    }, [])

    
    return (
        <Container fluid={'true'}>
                {
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
                    })
                   
                   
                }    
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

