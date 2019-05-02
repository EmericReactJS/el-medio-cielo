import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row } from 'reactstrap';
import { LanguagesProvider, initialState } from './I18nContext';
import MainNav from './MainNav';
import MainBanner from './MainBanner';
import MainBlock from './MainBlock';
import Lecture from '../containers/Lecture.1';
import Coaching from '../containers/Coaching';
import Footer from './Footer';

const MainContent = () => {
  const [lang, setLang] = useState('es');
  return (
    <Row>
      <LanguagesProvider value={initialState.langCode(lang)}>
        <MainBanner />
        <MainNav setLang={setLang} />
        <Switch>
          <Route exact path="/" component={MainBlock} />
          <Route exact path="/Lecture" component={Lecture} />
          <Route exact path="/Coaching" component={Coaching} />
        </Switch>
        <Footer />
      </LanguagesProvider>
    </Row>
  );
};


export default MainContent;
