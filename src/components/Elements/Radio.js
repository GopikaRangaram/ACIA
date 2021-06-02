import React, { useContext, Fragment } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FormContext } from '../Layout/FormContext';
import Element from '../Layout/Element';
import { useState } from 'react';


function Radio({field_id, 
    field_label,
    field_value, 
    field_options, 
    field_mandatory, 
    yes_options,
    errors
    }){


    const { handleChange } = useContext(FormContext)
    
    const [rental, setRental] =   useState(false);

    const [towing, setTowing] = useState(false);


    const checkIfSelectedorNot = (event) => {


        if (document.getElementById ('rental_yes').checked) {
            setRental (true);
          } 
        else setRental(false);



        if(document.getElementById('towing_yes').checked) {
            setTowing (true);
        }
        else setTowing (false);

    }

    
    return (
        <Form.Group className='pb-4'>
            <Form.Label id="radio-button-label" 
            className='field-label'>{field_label}</Form.Label>
            {field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Row className='p-2'>
                {field_options.length > 0 && field_options.map((option, index) =>
                <Fragment key={index} >
                    <Col lg={6}>
                        <Form.Group id="radio-button-field" 
                            onChange = { event => checkIfSelectedorNot(event) }
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




        <div style={{display: rental ? 'block' : 'none'}}>
        <Row>
          {yes_options.length > 0 &&
            yes_options.map ((sub_field, index) => {

              return (
                <Col lg={12} key={index}>
                  <Element key={index} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>


      <div style={{display: towing ? 'block' : 'none'}}>
        <Row>
          {yes_options.length > 0 &&
            yes_options.map ((sub_field, index) => {

              return (
                <Col lg={12} key={index}>
                  <Element key={index} field={sub_field} />
                </Col>
              );
            })}
        </Row>
      </div>


        </Form.Group>

      );
}

export default Radio;