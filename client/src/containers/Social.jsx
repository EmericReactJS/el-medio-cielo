import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';
import { LanguagesConsumer } from '../components/I18nContext';

class Social extends Component {
  render() {
    return (
      <LanguagesConsumer>
        {languages => (
          <Row className="social container-fluid no-gutters" id="Recursos">
            <Row className="socialMainTitle container-fluid no-gutters">
              <h1>{languages.Recursos.main}</h1>
            </Row>
            <Row className="socialtitle container-fluid no-gutters" id="Youtube">
              <h1>{languages.Recursos.title_a}</h1>
            </Row>
            <Row className="socialvideo container-fluid no-gutters">
              <MediaQuery minDeviceWidth={415}>
                <Col>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/2NfP8u3zUJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/17D5GLLkxF4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={411}>
                <Col>
                  <iframe width="300" height="175" src="https://www.youtube.com/embed/2NfP8u3zUJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                  <iframe width="300" height="175" src="https://www.youtube.com/embed/17D5GLLkxF4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
              </MediaQuery>
            </Row>
            <Row className="socialtitle container-fluid no-gutters" id="Instagram">
              <h1>{languages.Recursos.title_b}</h1>
            </Row>
            <Row className="socialimage container-fluid no-gutters">
              <Col>
                <a href="https://www.instagram.com/elmediocielo/" target="_blank"><img src="https://scontent-cdt1-1.cdninstagram.com/vp/d02a2847ea224e282f6fb11113367bc8/5D20C66C/t51.2885-15/e35/52719318_2196591713760201_6510692551299061282_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com" />
                </a>
              </Col>
              <Col>
                <a href="https://www.instagram.com/elmediocielo/" target="_blank"><img src="https://scontent-cdt1-1.cdninstagram.com/vp/d02a2847ea224e282f6fb11113367bc8/5D20C66C/t51.2885-15/e35/52719318_2196591713760201_6510692551299061282_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com" />
                </a>
              </Col>
              <MediaQuery maxDeviceWidth={411}>
                <Col className="socialmore">
                  <a href="https://www.instagram.com/elmediocielo/" target="_blank">Màs . . .</a>
                </Col>
              </MediaQuery>
              <MediaQuery minDeviceWidth={411}>
                <Col>
                  <a href="https://www.instagram.com/elmediocielo/" target="_blank"><img src="https://scontent-cdt1-1.cdninstagram.com/vp/d02a2847ea224e282f6fb11113367bc8/5D20C66C/t51.2885-15/e35/52719318_2196591713760201_6510692551299061282_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com" />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.instagram.com/elmediocielo/" target="_blank"><img src="https://scontent-cdt1-1.cdninstagram.com/vp/d02a2847ea224e282f6fb11113367bc8/5D20C66C/t51.2885-15/e35/52719318_2196591713760201_6510692551299061282_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com" />
                  </a>
                </Col>
              </MediaQuery>
            </Row>
            <Row className="container-fluid no-gutters justify-content-center">
              <div class="g-ytsubscribe" data-channelid="UCya9IwpoVQqRXsNwAQu7ntg" data-layout="default" data-count="default"></div>
            </Row>
          </Row>
        )}
      </LanguagesConsumer>
    );
  }
}

export default Social;
