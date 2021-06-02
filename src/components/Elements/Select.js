import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';

import { FormContext } from '../Layout/FormContext';

const Select = ({ field_id, field_label, field_placeholder, field_value, field_options, field_mandatory,errors}) => {

   
    const { handleChange } = useContext(FormContext)

    return (
        <Form.Group className='pb-4'>
            <Form.Label className='field-label'>{field_label}</Form.Label>
            {field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Control className="form-field" as="select" 
            value={field_value} 
            onChange={
                event => handleChange(field_id,event)
            }
            >
            <option >-- Please Select --</option>
                {field_options.length > 0 && field_options.map((option, index) =>
                    <option 
                    value={option.option_label} 
                    key={index}>{option.option_label}
                    </option>
                )}
                </Form.Control>
                <span style={{color: "red"}}>{errors ? errors : ""}</span>
        </Form.Group>
    )
}

export default Select;