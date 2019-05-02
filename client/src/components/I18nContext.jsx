import React from 'react';
import ES from '../text/es.json';
import FR from '../text/fr.json';

const translations = {
  es: ES,
  fr: FR,
};

export const initialState = {
  langCode: function translate(lang) { return translations[lang]; },
};

const I18nContext = React.createContext();

export const LanguagesProvider = I18nContext.Provider;
export const LanguagesConsumer = I18nContext.Consumer;
