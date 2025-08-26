import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Contact.css';
import axios from 'axios';

interface ContactProps {
  isFluid: boolean;
}

const Contact: React.FC<ContactProps> = ({ isFluid }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject: any = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };
    
    event.currentTarget.reset();
    setShowModal(true);

    try {
      await axios.post(`${window.location.origin}/submit`,formObject);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container id='contact' fluid={isFluid} className={isFluid ? 'px-5 mt-2' : 'mt-2'}>
      <h1>Contact Me</h1>
      <Form id='form' onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3 inputBoxes">
                  <Form.Control type="text" placeholder="First Name" name="firstName" required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3 inputBoxes">
                  <Form.Control type="text" placeholder="Last Name" name="lastName" required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 inputBoxes">
                  <Form.Control type="email" placeholder="name@example.com" name="email" required />
              </FloatingLabel>
            </Col>
            <Col sm={12} md={6}>
              <FloatingLabel controlId="floatingPhone" label="Phone No" className="mb-3 inputBoxes">
                  <Form.Control type="tel" placeholder="Phone No" name="phone" required />
              </FloatingLabel>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FloatingLabel controlId="floatingTextarea" label="Your message" className="mb-3 inputBoxes">
                  <Form.Control as="textarea" placeholder="Enter your message" style={{ height: '8rem' }} name="message" required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
                <Button variant="primary" type="submit" id='submit'>Submit</Button>
            </Col>
          </Row>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Your message has been submitted successfully. I will get back to you shortly.</h6>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Contact;
