import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormHandleChangeContext } from '../Layout/FormContext';

const MultipleSelect = ({ 
    field_id, 
    field_label,
    field_placeholder, 
    field_value, 
    field_options, 
    field_mandatory
}) => {

    
    const { handleChange } = useContext(FormHandleChangeContext)

    return (
        <Form.Group className='pb-4'>
            <Form.Label className='field-label'>{field_label}</Form.Label>
            <Form.Control className="form-field" as="select"
             multiple={true} 
             value={field_value || []}
             >
                {
                field_options.length > 0 && field_options.map((option, i) =>
                    <option value={option.option_label}
                    onChange={event => handleChange(field_id, event)}
                     key={i}>{option.option_label}</option>
                )}
                </Form.Control>
            
        </Form.Group>
    )
}

export default MultipleSelect;