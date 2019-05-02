import React, { useState } from 'react';
import {
  Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Collapse,
} from 'reactstrap';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { HashLink as Link } from 'react-router-hash-link';
import { LanguagesConsumer } from '../components/I18nContext';

import ProductOne from '../assets/Product1.jpg';

const Services = () => {
  const [isCollapse, toggle] = useState(false);
  const [bisIsCollapse, bisToggle] = useState(false);
  return (
    <LanguagesConsumer>
      {languages => (
        <Row className="services" id="Services">
          <Row className="titleservices container-fluid no-gutters">
            <h1>{languages.Servicios.title}</h1>
            <p>{languages.Servicios.subtitle}</p>
          </Row>
          <Row className="products container-fluid no-gutters" sm={12}>
            <Col className="servicios">
              <Card>
                <CardHeader className="cardtitle" tag="h3" id="Lecture">{languages.Servicios.lecture.title}</CardHeader>
                <CardBody onClick={() => toggle(!isCollapse)}>
                  <CardText>{languages.Servicios.lecture.presentation}</CardText>
                  <CardTitle>
                    {
                      !isCollapse
                        ? <MdExpandMore />
                        : <MdExpandLess />
                    }
                  </CardTitle>
                  <Collapse isOpen={isCollapse}>
                    <CardText>{languages.Servicios.lecture.more}</CardText>
                  </Collapse>
                </CardBody>
                <CardFooter>
                  <img src={ProductOne} alt="productimg" />
                  <Link smooth to="/Lecture#wrapperform">
                    <Button className="servicesbutton container-fluid">{languages.Servicios.lecture.button}</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
            <Col className="servicios">
              <Card>
                <CardHeader className="cardtitle" tag="h3" id="Coaching">{languages.Servicios.coaching.title}</CardHeader>
                <CardBody onClick={() => bisToggle(!bisIsCollapse)}>
                  <CardText>{languages.Servicios.coaching.presentation}</CardText>
                  <CardTitle>
                    {
                      !bisIsCollapse
                        ? <MdExpandMore />
                        : <MdExpandLess />
                    }
                  </CardTitle>
                  <Collapse isOpen={bisIsCollapse}>
                    <CardText>{languages.Servicios.coaching.more}</CardText>
                  </Collapse>
                </CardBody>
                <CardFooter>
                  <img src={ProductOne} alt="productimg" />
                  <Link smooth to="/Coaching#wrapperform">
                    <Button className="servicesbutton container-fluid">
                      {languages.Servicios.coaching.button}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Row>
      )}
    </LanguagesConsumer>
  );
};

export default Services;
