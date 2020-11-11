import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import { LanguageProvider} from './contexts/language-context';
import ErrorBoundary from './components/error-boundary';

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);
