import React from 'react';
import ClaimFormData from './ClaimFormData.json';
import { useState, useEffect } from 'react';
import Element from '../Element';
import FormLayout from '../FormLayout';
import { Card, Row, Col, Button} from 'react-bootstrap';
import { FormContext } from '../FormContext';


const ClaimForm = () => {

    const [elements,setElements] = useState(null);

    useEffect(() => { 
        setElements(ClaimFormData[0])  
    },[])

    const {fields,page_label, page_description } = elements ?? {}



    const handleSubmit = (event) => {

      event.preventDefault();

      const newElements = { ...elements }
      newElements.fields.forEach(row => {
        row.fields.forEach(field => {
  
        if(field.field_mandatory == "yes" && field.field_value == ""){
            field.errors = "Should not be empty";
            setElements(newElements);
        }
      })
      });
  
      console.log(elements)
    }
    



    const handleChange = ( id, event ) => {

      const newElements = { ...elements }

      newElements.fields.forEach(row => {
        row.fields.forEach(field => {
        if (id === field.field_id) {
          switch (field.field_type) {
            case 'checkbox':
              field.field_value = event.target.checked;
              break;
  
            case 'multiple_select':
              field.field_value = Array.from(event.target.selectedOptions, option => option.value);
              break;
              
            default:
              field.field_value = event.target.value;
              break;
          }
        }
        field.errors="";
        setElements(newElements)
    })
  })
   
    console.log(elements)
}

return (

    <FormContext.Provider value={{handleChange}}>
    <Card className='form-layout'>
        <Row  className='p-5'>
        <p className='page-label'>{page_label}</p>
        <p className='page-description pb-5'>{page_description}</p> 
        <Row>
        {
            fields? fields.map((field,index) => 
           {
            
            if (field.layout === "row") {  
                return (
                  <Row>
                  <p className="page-sub-label p-3 my-5">{field.page_sub_label}</p>
                  <FormLayout
                    key={index}
                    field={field}
                  />
                  </Row>
                );
                }
              else
              {
                return (
                  <Row>
                   <p className="page-sub-label p-5 my-5">{field.page_sub_label}</p>
                  <Element
                    key={index}
                    field={field.fields[0]}
                  />
                  </Row>
                );
              }
           }):null
        }
        </Row>

        <Col lg={7}/>
            <Col>
                <Button variant="success" className="button-rounded grey-btn" 
                type="submit" 
                >
                Cancel
                </Button> { ' ' }
                <Button variant="success" className="button-rounded green-btn" 
                type="submit" 
                onClick={(event) => handleSubmit(event)}>
                Next
                </Button>
            </Col>
        </Row>
    </Card>
    </FormContext.Provider>

)
}

export default ClaimForm