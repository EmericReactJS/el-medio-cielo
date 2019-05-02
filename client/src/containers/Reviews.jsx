import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import { LanguagesConsumer } from '../components/I18nContext';

const Reviews = () => {
  return (
    <LanguagesConsumer>
      {languages => (
        <Row className="reviews container-fluid no-gutters" id="Reviews">
          <Row className="reviewstitle container-fluid no-gutters align-content-center justify-content-center">
            <h1>{languages.Comentarios.main}</h1>
          </Row>
          <Row className="reviewscomment container-fluid align-content-center justify-content-center mx-auto">
            <Col>
              <h5>{`"With supporting text below as a natural lead-in to additional content."`}</h5>
              <h2>Maria Jimenez</h2>
            </Col>
            <Col>
              <h5>{`"With supporting text below as a natural lead-in to additional content."`}</h5>
              <h2>Maria Jimenez</h2>
            </Col>
            <Col>
              <h5>{`"With supporting text below as a natural lead-in to additional content."`}</h5>
              <h2>Maria Jimenez</h2>
            </Col>
          </Row>
        </Row>
      )}
    </LanguagesConsumer>
  )
}

export default Reviews;
