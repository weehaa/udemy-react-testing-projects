import { createContext } from 'react';
import getStringByLanguage from '../helpers/strings';

/**
 * game complexity level context, assuming three levels, stored in `strings` file:
 * easy - every matched letter from the guess is shown
 * iddle - show only letters in place - default
 * hard - don't show matched letters, but letters may be edited by users
 */
const defaultLevel = getStringByLanguage('en', 'levels')['medium'];
export default createContext(defaultLevel);
