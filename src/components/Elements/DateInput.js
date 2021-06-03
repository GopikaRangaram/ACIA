import React, { useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { FormContext } from '../Layout/FormContext';
import { useState } from 'react'


function DateInput({
    field_id, 
    field_label, 
    field_placeholder, 
    field_value, 
    field_mandatory,
    errors
}){


    const [currentDate, setCurrentDate] =  useState()

    const { handleChange } = useContext(FormContext)


    useEffect(() => {

        var todayDate = new Date();
        var month = todayDate.getMonth() + 1;
        var year = todayDate.getUTCFullYear();
        var dateValue = todayDate.getDate();
        if(month < 10) { month = "0" + month}
        if(dateValue < 10) { dateValue = "0" + dateValue}
        var maxDate =  year + "-" + month + "-" + dateValue
        setCurrentDate(maxDate)
       
    }, []
    )
    
    console.log(currentDate, 'after useEffect')
    console.log(typeof(currentDate),'type')

    return (
        <Form.Group className='pb-4'>
            <Form.Label className='field-label'>{field_label}</Form.Label>
            {field_mandatory === "yes" ? <span className="mandatory"><b> * </b></span> : " "}
            <Form.Control 
            placeholder = {field_placeholder}
            className="form-field" 
            type="date" 
            max={currentDate}
            value={field_value}
            onChange={
                event => handleChange(field_id,event)
            }
            />
            <span style={{color: "red"}}>{errors ? errors : ""}</span>
        </Form.Group>
      );
}

export default DateInput;