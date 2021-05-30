import React from 'react';
import payBill from './payBillFormData.json';
import { useState, useEffect} from 'react';
import Element from '../Element';
import { Card,Row} from 'react-bootstrap';

const PayBill = () => {


const [elements, setElements] = useState(null);

useEffect(() => {
    setElements(payBill[0])
})

const {fields,page_label, page_description } = elements ?? {}

return(

    
 
    <Card className='form-layout'>
        <Row  className='p-5'>
        <h3 className='page_label'>{page_label}</h3>
        <h6 className='page_description pb-5'>{page_description}</h6>
        <Row  className='p-5'>
        {
            fields? fields.map((field,index) => 
            <Element key={index} field={field} />
            ) : null
        }
        </Row>
        </Row>
    </Card>
)

}



export default PayBill
