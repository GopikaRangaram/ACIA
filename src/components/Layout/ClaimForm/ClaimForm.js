import React from 'react';
import ClaimFormData from './ClaimFormData.json';
import { useState, useEffect } from 'react';
import Element from '../Element';
import { Card, Row} from 'react-bootstrap';

const ClaimForm = () => {

    const [elements,setElements] = useState(ClaimFormData);

    useEffect(() => { 
        setElements(ClaimFormData)  
    },[])

return (
<Card className='form-layout'>
 <Row className='p-5'>
    {
    elements.map((items,index) => 
        {
             const { fields, page_label } = items ?? {}
                 return(   
                     <Row className='m-0'> 
                        <h4 className='claim_page_label py-3 mb-5'>{page_label}</h4>
                         {  
                            fields? fields.map((field,index) => 
                            <Element key={index} field={field}/>
                            ) : null
                         }
                    </Row>
                    )
        }
    )
}
</Row>
</Card>
)
}

export default ClaimForm