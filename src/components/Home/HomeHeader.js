import React from 'react';
import { Container,Row, Col, Button,ButtonGroup} from 'react-bootstrap';
import '../../scss/styles/HomePage.scss';
import '../Layout/Header/header.scss';
import header from './homeHeader.json';
import {useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import Element from '../Layout/Element';
import { FormContext } from '../Layout/FormContext';



const HomeHeader = () => {

    const [ homeHeader, setHeader ] = useState();

    const [url, setUrl ] = useState();


    useEffect(() => {
        setHeader(header[0])
    }, [])

    
const {fields, titleOne, titleTwo, contentOne, contentTwo, imageName } = homeHeader ?? {}


    let history = useHistory();
    const loadPage = () => {
     history.push(url);
   }


   const handleChange = ( id, event ) => {
    const newElements = {...homeHeader}
    newElements.fields.forEach(field => {

        const { field_type, field_id} = field;
        if(id === field_id) {

            switch(field_type) {
                default:
                    field['field_value'] = event.target.value;
                    break;
            }
        }
       
        setHeader(newElements)

        console.log(field.field_value)
        switch(field.field_value){

            case "Motor Insurance" : setUrl("motor-insurance")
            break;

            case "Home Insurance" : setUrl("")
            break;

            default : setUrl("#")
            break;

        }

    });

    console.log(homeHeader)
}

  
   return (

    
    <FormContext.Provider value={{handleChange}}>
    <Container fluid={'true'} className='header'>
    <Row>
            <Col xs={2} md={4} lg={6} className="mx-4">
            <p className="title1">{titleOne}{' '}<span className="title2">{titleTwo}</span></p>
            <p className="content">{contentOne}<br></br> {contentTwo}</p>
            <div className="container-button">
                <div className="container" >
                
                <ButtonGroup style={{alignItems:"center"}}>
                {
                    fields? fields.map((field,index) => 
                    <Element key={index} field={field} />
                    ) : null
                    
                }
                 </ButtonGroup>
               
               
                    <ButtonGroup style={{alignItems:"center"}}>
                    <Button onClick={loadPage}
                    className="go-button px-3" variant="light">
                        <span className="go" >Go{' '}&gt;</span>
                    </Button>
                    </ButtonGroup> 
                </div>     
            </div>
            </Col>

            
            <Col className="header-image">
            <img src={require(`../../assets/images/header/${imageName}.png`).default}
            alt={imageName}/>
            </Col>
            
    </Row>
    </Container>
    </FormContext.Provider>
   )
}


export default HomeHeader;