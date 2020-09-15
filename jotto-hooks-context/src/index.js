import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import { LanguageProvider} from './contexts/language-context';

ReactDOM.render(
  <Router>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Router>,
  document.getElementById('root')
);
