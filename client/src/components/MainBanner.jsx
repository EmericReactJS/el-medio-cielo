import React from 'react';
import { Col, Button } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { LanguagesConsumer } from './I18nContext';

const MainBanner = () => {
  return (
    <LanguagesConsumer>
      {languages => (
        <Col className="mainbanner" sm={12}>
          <Link to="/" className="bannertitle">
            <Button>
              <h1>{languages.Banner.main}</h1>
              <h4>{languages.Banner.title_a}</h4>
              <h4>{languages.Banner.title_b}</h4>
            </Button>
          </Link>
        </Col>
      )}
    </LanguagesConsumer>
  );
};

export default MainBanner;
