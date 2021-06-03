import React from 'react';
import ClaimFormData from './ClaimFormData.json';
import { useState, useEffect } from 'react';
import Element from '../Element';
import FormLayout from '../FormLayout';
import { Card, Row, Col, Button, Toast} from 'react-bootstrap';
import { FormContext } from '../FormContext';


const ClaimForm = () => {

    const [elements,setElements] = useState(null);

    const [ cancel, setCancel ] = useState(false);

    useEffect(() => { 
        setElements(ClaimFormData[0])  
    },[])

    const {fields,page_label, page_description } = elements ?? {}




    const handleCancel = () => {
      setCancel(!cancel);
  }
  
  const clearEnteredData = () => {
  
      const newElements = {...elements}
      newElements.fields.forEach(row => {
          row.fields.forEach(field => {

            field.field_value = ""
            field.errors=""

            if(field.yes_options){
            field.yes_options.forEach(inner_field => {
              inner_field.field_value = ""
              inner_field.errors =  ""
            })
            
          }

          })

        })
         setElements(newElements)
         console.log(elements, 'after cancel')
  
         setCancel(!cancel);
  
  }
  



    const handleSubmit = (event) => {

      event.preventDefault();

      const newElements = { ...elements }
      newElements.fields.forEach(row => {
        row.fields.forEach(field => {
  
        if(field.field_mandatory === "yes" && field.field_value === ""){
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
              
            default:
              field.field_value = event.target.value;
              break;
          }
        }


      if(field.rental_yes_options) {
        field.rental_yes_options.forEach(yes_option => {
          if(id ===  yes_option.field_id) {
            switch (yes_option.field_type) {

              default:
                yes_option.field_value = event.target.value;
                break;
            }

          }
        })

      }


      if(field.towing_yes_options) {
        field.towing_yes_options.forEach(yes_option => {
          if(id ===  yes_option.field_id) {
            switch (yes_option.field_type) {

              default:
                yes_option.field_value = event.target.value;
                break;
            }

          }
        })

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
                  <Row key={index}>
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
                  <Row key={index}>
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


        <Toast className="toast" show={cancel}
        onClose={handleCancel}
        >
            <Toast.Header className="toast-header"> Are you sure? </Toast.Header>
            <Toast.Body className="toast-body"> On cancelling you will loose the entered data </Toast.Body>
            <Button variant="success" className="button-rounded green-btn" onClick={clearEnteredData}> Yes </Button>
        </Toast>

        <Col lg={6}/>
            <Col>
                <Button variant="success" className="button-rounded grey-btn" 
                type="submit" 
                onClick={handleCancel}
                >
                Cancel
                </Button> { ' ' }
                <Button variant="success" className="button-rounded green-btn" 
                type="submit" 
                onClick={(event) => handleSubmit(event)}>
                Submit
                </Button>
            </Col>
        </Row>
    </Card>
    </FormContext.Provider>

)
}

export default ClaimForm