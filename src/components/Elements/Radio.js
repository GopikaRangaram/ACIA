import React, { useContext, Fragment, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FormContext } from '../Layout/FormContext';
import Element from '../Layout/Element';
import { Button } from 'react-bootstrap';


function Radio({field_id, 
    field_label,
    field_placeholder, 
    field_value, 
    field_options, 
    field_mandatory, 
    errors,
    yes_options,
    }){


    const { handleChange } = useContext(FormContext)



    
    return (
        <Form.Group className='pb-4'>
            <Form.Label id="radio-button-label" 
            className='field-label'>{field_label}</Form.Label>
            {field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Row className='p-2'>
                {field_options.length > 0 && field_options.map((option, i) =>
                <Fragment key={i} >
                    <Col lg={6}>
                        <Form.Group id="radio-button-field" 
                             className="radio-button">
                                <input id={option.option_id} name={field_id} className="radio-button-input" 
                                type="radio" 
                                value={option.option_value} 
                                checked={field_value === option.option_value} 
                                onChange={event => handleChange(field_id, event)}
                             />
                            <Form.Label>{option.option_label}</Form.Label>
                        </Form.Group>
                    </Col>
                </Fragment>
            )}
            </Row>
            <span style={{color: "red"}}>{errors ? errors : ""}</span>
        </Form.Group>
      );
}

export default Radio;