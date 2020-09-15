import React, { useContext, useMemo, useState } from 'react';
import { getLanguageStrings, getDefaultLanguage } from '../helpers/strings';

const languageContext = React.createContext('en');

/**
 * Custom hook for consuming current language strings
 * @returns {object} current language strings definitions
 */
export const useLangStrings = () => {
  const context = useContext(languageContext);
  if (!Array.isArray(context) || !context.length) {
    throw new Error('useLangStrings hook must be used within the LanguageProvider');
  }
  const [language] = context;
  return getLanguageStrings(language);
};

/**
 * Provides current language and setLanguage
 * @param props ascendant element props to pass through
 * @returns {JSX.Element} Language provider
 *
 */
export const LanguageProvider = (props) => {
  const defaultLanguage = getDefaultLanguage();
  const [language, setLanguage] = useState(defaultLanguage);
  const value = useMemo(() => [language, setLanguage], [language])
  return <languageContext.Provider value={value} {...props} />
}

export default languageContext;
