import React from "react"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './questions.css';
import { API } from 'aws-amplify';

const Questions = () => {
    const postAnswer = (details) => {
        const response = API.post('surveyappuic269e0c8', '/item', {id: '12345', gender: 'female', sexualOrientation: 'gay', })
        console.log(response)
    } 
    
    return (
        <Form className="form">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                    Gender identity
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={3}>
                    Sexual Orientation
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="" />
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={3}>
                        Oral sex: if ur having it, what are ya calling it?
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Check
                            type="radio"
                            label="Eating out"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Going Down"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="Other"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Col>
                </Form.Group>
            </fieldset>
            <Button className="button" variant="primary" type="submit" onClick={postAnswer}>
                Submit
            </Button>
        </Form>
    );
}

export default Questions