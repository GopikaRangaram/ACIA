import React from 'react';
import Element from './Element';
import { Form, Col, Row } from 'react-bootstrap';

function FormLayout({ field } ){
    const fields = field.fields;
    
        return (
            <Form.Row>
                <Row>
                {fields.map((field, index) => {
                    return (
                    <Col lg={6} key={index}>
                        <Element
                            key={index}
                            field={field}
                        />
                    </Col>
                    );
                })
                }
                </Row>
            </Form.Row>
          
        );
}

export default FormLayout;