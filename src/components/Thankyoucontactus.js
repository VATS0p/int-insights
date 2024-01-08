import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BiCheckCircle } from 'react-icons/bi';
import {useNavigate} from "react-router-dom";

function Thankyoucontactus() {
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="border border-3 border-success"></div>
            <Card className="bg-white shadow p-5">
              <div className="mb-4 text-center">
                <BiCheckCircle size={75} color="text-success" />
              </div>
              <div className="text-center">
                <h1>Thank You!</h1>
                <p>We will contact you soon</p>
                <Button onClick={()=>navigate('/')} variant="outline-success">Back Home</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Thankyoucontactus
