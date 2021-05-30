import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormContext } from '../Layout/FormContext';


function TextInput({field_id, field_label, field_placeholder, field_value, field_mandatory}){

  
    
    return (
        <Form.Group className='pb-5'>
            <Form.Label className='form-label'>{field_label}</Form.Label>
            {
            field_mandatory == "yes" ? <span className="mandatory"><b> * </b></span> : " "
            }
            <Form.Control className="form-field" 
            placeholder={field_placeholder? field_placeholder : " "} 
            value={field_value}      
            />
           
        </Form.Group>
      );
}

export default TextInput;