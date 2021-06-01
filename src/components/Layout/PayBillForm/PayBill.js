import React from 'react';
import payBill from './payBillFormData.json';
import { useState, useEffect} from 'react';
import Element from '../Element';
import { Card, Row, Col, Button, Toast} from 'react-bootstrap';
import { FormContext } from '../FormContext';

const PayBill = () => {


const [elements, setElements] = useState(null);

const [ cancel, setCancel ] = useState(false);

useEffect(() => {
    setElements(payBill[0])
})

const {fields,page_label, page_description } = elements ?? {}


const handleSubmit = (event) => {
    event.preventDefault();
    const newElements = { ...elements }
    newElements.fields.forEach( item => {
      if(item.field_mandatory === "yes" && item.field_value === ""){ 
        item.errors = "Should not be empty";
        console.log(item.errors);
        
      }
    })
    setElements(newElements);
    console.log(newElements)
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

const handleCancel = () => {
    setElements("");
    setCancel(!cancel);
}

return(

    <FormContext.Provider value={{handleChange}}>

    <Card className='form-layout'>
        <Row  className='p-5'>
        <p className='page-label'>{page_label}</p>
        <p className='page-description pb-5'>{page_description}</p>
        <Row  className='p-5'>
        <Col lg={3}/>
        <Col lg={6} xs={12}>
        {
            fields? fields.map((field,index) => 
            <Element key={index} field={field} />
            ) : null
        }
        </Col>
        <Col lg={3}/>
        </Row>
        </Row>


        <Toast className="toast" show={cancel}
        onClose={handleCancel}
        >
            <Toast.Header className="toast-header"> Are you sure? </Toast.Header>
            <Toast.Body className="toast-body"> On cancelling you will loose the entered data </Toast.Body>
        </Toast>


        <Row className='pb-5'>
            <Col lg={7}/>
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
                Next
                </Button>
            </Col>
        </Row>
    </Card>
    </FormContext.Provider>
)

}



export default PayBill
