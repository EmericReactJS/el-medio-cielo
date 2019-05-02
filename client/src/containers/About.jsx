import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { LanguagesConsumer } from '../components/I18nContext';
import CharacterOne from '../assets/ConCartaBorder.png';
import CieloOne from '../assets/CieloOneBorder.png';

const About = () => {
  return (
    <LanguagesConsumer>
      {languages => (
        <Row className="about">
          <Col sm={12} id="Cielo">
            <Jumbotron>
              <Row>
                <h3>{languages.Medio.title}</h3>
                <p className="profile">
                  <img src={CieloOne} alt="cieloImage" />
                </p>
              </Row>
              <Row className="textJumbo">
                <p className="lead">{languages.Medio.p_lead}</p>
                <p className="second">
                  Buscas (re)descubrir tu autenticidad y tu Misión de Vida? Quieres desplegar tu potencial personal, profesional y creativo? Si deseas reencontrarte contigo misma, este es tu lugar! Mediante sesiones individuales presenciales o a distancia, te ayudo a descubrir aquello que estás buscando. Utilizo diferentes
                  <Link smooth to="#Services"> tipos de lecturas </Link>
                  y también pongo a tu alcance
                  <Link smooth to="#Recursos"> recursos gratuitos </Link>
                  para tu desarrollo personal.
                </p>
                <p className="second">{languages.Medio.p_second_b}</p>
              </Row>
            </Jumbotron>
          </Col>
          <Col sm={12} id="About">
            <Jumbotron>
              <Row>
                <p className="mediocielo">
                  <img src={CharacterOne} alt="profileImage" />
                </p>
                <h3>{languages.Acerca.title}</h3>
              </Row>
              <Row className="textJumbo">
                <p className="lead">{languages.Acerca.p_lead}</p>
                <p className="second">{languages.Acerca.p_second_a}</p>
                <p className="second">{languages.Acerca.p_second_b}</p>
                <p className="second">{languages.Acerca.p_second_c}</p>
                <p className="second">{languages.Acerca.p_second_d}</p>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      )}
    </LanguagesConsumer>
  );
};

export default About;
