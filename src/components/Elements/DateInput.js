import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormContext } from '../Layout/FormContext';

function DateInput({
    field_id, 
    field_label, 
    field_placeholder, 
    field_value, 
    field_mandatory,
    errors
}){

    const { handleChange } = useContext(FormContext)

   
    return (
        <Form.Group className='pb-4'>
            <Form.Label className='field-label'>{field_label}</Form.Label>
            {field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Control 
            className="form-field" 
            type="date" 
            value={field_value} 
            onChange={
                event => handleChange(field_id,event)
            }
            format="dd-mm-yyyy" />
            <span style={{color: "red"}}>{errors ? errors : ""}</span>
        </Form.Group>
      );
}

export default DateInput;