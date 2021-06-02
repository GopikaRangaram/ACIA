import React from 'react';
import { useState, useEffect} from 'react';
import Element from '../Layout/Element';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FormContext } from '../Layout/FormContext';
import loginForm from './login.json';

const Login = () => {


const [elements, setElements] = useState(null);

useEffect(() => {

    setElements(loginForm[0])

},[])



const handleSubmit = (event) => {
    event.preventDefault();
    const newElements = { ...elements }
    newElements.fields.forEach( item => {
      if(item.field_mandatory === "yes" && item.field_value === ""){ 
        item.errors = "Should not be empty";
        console.log(item.errors);
      }
    })
     setElements(newElements)
     console.log(elements, 'at submit')
}



const handleChange = ( id, event ) => {
    const newElements = {...elements}
    newElements.fields.forEach(field => {

        const { field_type, field_id} = field;
        if(id === field_id) {

            switch(field_type) {
                
                default:
                    field['field_value'] = event.target.value;
                    break;
            }
        }
        field.errors='';
        setElements(newElements)
    });

    console.log(elements)
}


const {fields,page_label, page_description } = elements ?? {}


return (

    <FormContext.Provider value={{handleChange}}>
    <Container>
        <Row  className='p-5'>
        <Col lg={4}>
        <p className='page-label'>{page_label}</p>
        <p className='page-description pb-5'>{page_description}</p>
        {
            fields? fields.map((field,index) => 
            <Element key={index} field={field} />
            ) : null
        }
        </Col>
        <Col lg={3}/>
        </Row>
    
    </Container>
    </FormContext.Provider>

)


}


export default Login