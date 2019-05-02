import React from 'react';
import { Row, Col } from 'reactstrap';
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { LanguagesConsumer } from './I18nContext';

const Footer = () => {
  return (
    <LanguagesConsumer>
      {languages => (
        <Row className="footer container-fluid no-gutters">
          <Row className="footerTitle container-fluid no-gutters">
            <h2>{languages.Footer.main}</h2>
          </Row>
          <Row className="footericons container-fluid no-gutters">
            <Col>
              <a href="https://www.facebook.com/El-Medio-Cielo-326523621261620/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
            </Col>
            <Col>
              <a href="https://www.instagram.com/elmediocielo/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </Col>
            <Col>
              <a href="https://www.pinterest.fr/elmediocielo/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
            </Col>
            <Col>
              <a href="https://www.youtube.com/channel/UCya9IwpoVQqRXsNwAQu7ntg" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </Col>
          </Row>
          <Row className="mailLink container-fluid no-gutters">
            <a href="mailto:contacto.elmediocielo@gmail.com">contacto.elmediocielo@gmail.com</a>
          </Row>
        </Row>
      )}
    </LanguagesConsumer>
  );
};

export default Footer;
