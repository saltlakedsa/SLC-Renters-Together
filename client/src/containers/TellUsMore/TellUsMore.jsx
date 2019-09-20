import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import axios from "axios";

import useForm from "../../hooks/useForm";

export default function TellUsMore() {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      address: "",
      neighborhood: "",
      complex: "",
      landlord: "",
      bedrooms: "",
      rent: "",
      size: "",
      amenities: "",
      description: "",
      tenure: "",
      name: "",
      email: ""
    },
    () => {
      axios.post('/', inputs)
      .then(() => {
        setShowSuccess(true);
      })
      .catch(() => {
        setShowError(true);
      });
    }
  );
  // method="POST" enctype="multipart/form-data" action="/"
  return (
    <div className="tell-us-more">
      <Container>
        <h2 className="mt-4">More coming soon!</h2>
        <h5 className="mt-4 mb-4">In the meantime, tell us about your place! We promise to keep your info anonymous. Please answer as much as you
          know
          <span role="img" aria-label="emoji">
            🤗
          </span>
          !
        </h5>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                placeholder="ex. 1008 Emory Rd. #2"
                name="address"
                onChange={handleInputChange}
                value={inputs.address}
              />
            </Col>
            <Col className="d-none d-sm-block">
              <Form.Label>Rental Neighborhood</Form.Label>
              <Form.Control
                placeholder="ex: Rose Park"
                name="neighborhood"
                onChange={handleInputChange}
                value={inputs.neighborhood}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-block d-sm-none">
              <Form.Label>Rental Neighborhood</Form.Label>
              <Form.Control
                placeholder="ex: Rose Park"
                name="neighborhood"
                onChange={handleInputChange}
                value={inputs.neighborhood}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Complex Name</Form.Label>
              <Form.Control
                placeholder="ex. Chase Court"
                name="complex"
                onChange={handleInputChange}
                value={inputs.complex}
              />
            </Col>
            <Col className="d-none d-sm-block">
              <Form.Label>Landlord or Management Company</Form.Label>
              <Form.Control
                placeholder="ex. Gage Management"
                name="landlord"
                onChange={handleInputChange}
                value={inputs.landlord}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-sm-none d-block">
              <Form.Label>Landlord or Management Company</Form.Label>
              <Form.Control
                placeholder="ex. Gage Management"
                name="landlord"
                onChange={handleInputChange}
                value={inputs.landlord}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Bedrooms</Form.Label>
              <Form.Control
                name="bedrooms"
                onChange={handleInputChange}
                value={inputs.bedrooms}
              />
            </Col>
            <Col>
              <Form.Label>Rent</Form.Label>
              <Form.Control
                name="rent"
                onChange={handleInputChange}
                value={inputs.rent}
              />
            </Col>
            <Col>
              <Form.Label>Size</Form.Label>
              <Form.Control
                name="size"
                onChange={handleInputChange}
                value={inputs.size}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Unit or Complex Amenities</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="ex. dishwasher, on-site pay laundry, covered parking"
                name="amenities"
                onChange={handleInputChange}
                value={inputs.amenities}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>
                What&#39;s good and what sucks about this place?
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Don't hold back here!"
                name="description"
                onChange={handleInputChange}
                value={inputs.description}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>When/how long you lived here</Form.Label>
              <Form.Control
                name="tenure"
                onChange={handleInputChange}
                value={inputs.tenure}
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Form.Label>Your name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleInputChange}
                value={inputs.name}
              />
            </Col>
            <Col>
              <Form.Label>Your email</Form.Label>
              <Form.Control
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
              />
            </Col>
          </Row>
          <div>
            <Button className="mb-4" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        {showSuccess && (
          <Alert
            variant="success"
            onClose={() => setShowSuccess(false)}
            dismissible
          >
            <p>
              Thanks for your response!
            </p>
          </Alert>
        )}
        {showError && (
          <Alert
            variant="danger"
            onClose={() => setShowError(false)}
            dismissible
          >
            <p>
              There was an issue submitting your form. Please try
              again.
            </p>
          </Alert>
        )}
      </Container>
    </div>
  );
}
