import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe createRoot de "react-dom/client"
import { I18nextProvider } from 'react-i18next';
import App from './App.jsx';
import './index.css';

import global_en from "./translation/en/global.json";
import global_pt from "./translation/pt/global.json";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue:false },
  lng: "pt",
  resources: {
    pt: { global: global_pt },
    en: { global: global_en },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
