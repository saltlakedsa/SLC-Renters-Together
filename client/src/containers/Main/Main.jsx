import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Button, Alert,
} from 'react-bootstrap';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import axios from 'axios';

import houses from '../../assets/images/slc-house-bw.jpg';

import useForm from '../../hooks/useForm';

export default function Main() {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const onSubmitContactInfo = () => {
    axios
      .post('/newsletter', inputs)
      .then(() => {
        setShowSuccess(true);
      })
      .catch(() => {
        setShowError(true);
      });
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(
    { name: '', email: '' },
    onSubmitContactInfo,
  );
  return (
    <ParallaxProvider>
      <div className="main">
        <ParallaxBanner
          className="your-class"
          layers={[
            {
              image: houses,
              amount: 0.5,
            },
          ]}
          style={{
            height: '700px',
          }}
        >
          <div className="parallaxChildren">
            <h1 className="parallaxText">
              Salt Lake City is in a housing crisis, we're here to stop it.
            </h1>
          </div>
        </ParallaxBanner>
        <Container>
          <Row className="mt-4 section-row ">
            <Col>
              <h2>Who we are</h2>
              <h4 className="mb-4">
                We believe that people have a right to
                {' '}
                <b>affordable and safe housing</b>
                {' '}
to provide the opportunities
                and security needed to live healthy and successful lives and
                create thriving communities.
              </h4>
              <h2>The problem at hand</h2>
              <h4 className="mb-4">
                For several years now the price of rent has skyrocketed along
                the Wasatch Front, with the average cost of rent in Salt Lake
                County increasing by 28 percent in the last five years. Low
                income families have yet to see a similar increase in wages,
                pricing our neighbors out of town or into homelessness, with one
                in five renters in Salt Lake at risk of being homeless. Our
                elected representatives have failed the working-class renters of
                the Wasatch Front, and will continue to do so. Landlords profit
                and dominate our political system. If this continues, working
                people will be unable to afford to live in Salt Lake City, or be
                pushed into increasingly lower quality living conditions as
                landlords flood the market with shoddy quality housing. Our
                community is hurting — and we're fed up.
              </h4>
              <h2>Renters, Together!</h2>
              <h4 className="mb-sm-2 mb-4">
                Renters have legal rights to safe housing. Together we have
                power. By coming together as renters, we can build our power to
                take on landlords in our community. Together we can fight to
                protect our health, safety, and access to housing. Renters are a
                majority in Salt Lake City. We have power — we just need to
                organize.
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-center">Want to know more? Join our newsletter!</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="align-self-center col-md-6 mb-4">
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col className="col-sm-6">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={handleInputChange} />
                  </Col>
                  <Col className="col-sm-6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" onChange={handleInputChange} />
                  </Col>
                </Row>
                <div className="mb-4 text-center">
                  <Button
                    className="text-center"
                    variant="primary"
                    type="submit"
                  >
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
                      Your contact info was sent! We'll be in touch real soon.
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
                      There was an issue submitting your email. Please try
                      again.
                    </p>
                  </Alert>
                )}
              <h4 className="text-center">
                Or, feel free to contact us at <a className="housing-email" href="mailto:saltlakedsa.housing@gmail.com">saltlakedsa.housing@gmail.com</a>.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </ParallaxProvider>
  );
}
