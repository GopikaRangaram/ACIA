import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';

import { FormContext } from '../Layout/FormContext';

const Select = ({ field_id, field_label, field_placeholder, field_value, field_options, field_mandatory}) => {

   

    return (
        <Form.Group className='pb-5'>
            <Form.Label>{field_label}</Form.Label>
            {field_mandatory == "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Control className="form-field" as="select" 
            value={field_value} 
            >
            <option >-- Please Select --</option>
                {field_options.length > 0 && field_options.map((option, i) =>
                    <option value={option.option_label} key={i}>{option.option_label}</option>
                    
                )}
                </Form.Control>
            
        </Form.Group>
    )
}

export default Select;