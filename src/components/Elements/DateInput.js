import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormContext } from '../Layout/FormContext';

function DateInput({
    field_id, 
    field_label, 
    field_placeholder, 
    field_value, 
    field_mandatory
}){

   
    
    return (
        <Form.Group className='pb-5'>
            <Form.Label>{field_label}</Form.Label>
            {field_mandatory == "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Control 
            className="form-field" 
            type="date" 
            value={field_value} 
            format="dd-mm-yyyy" />
        </Form.Group>
      );
}

export default DateInput;