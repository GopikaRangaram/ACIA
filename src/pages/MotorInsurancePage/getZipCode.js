import { Container, Row, Col, Button} from 'react-bootstrap';
import React, { useState} from "react";
import { useHistory }from 'react-router-dom';
import ZipCode from './ZipCode';


const GetZip = () => {



    const[zipCode, setZipCode] = useState(' ');

    const handleInputChange = event => {
     setZipCode(
       event.target.value
     )
   }
 
     const handleSubmit = event => {
         event.preventDefault()
         console.log(zipCode, '--')
         setZipCode('')
     }


    let history = useHistory();
    function loadAboutPolicyPage() {
        history.push('/policy-holder')
    }


return(

    <Container>

        
          <Row>
               <Col lg={4}>
               <ZipCode {...{zipCode,setZipCode}}/>
                        <form 
                        onSubmit={handleSubmit}
                        >
                            <input
                            type='text'
                            placeholder="zip code"
                            value={zipCode}
                            onChange={handleInputChange}
                            />

                            <Button 
                            type='submit'
                            onClick={loadAboutPolicyPage}
                            >
                            Get Quote
                            </Button>
                        </form>
                    </Col>
                </Row>
    </Container>

)

}

export default GetZip;