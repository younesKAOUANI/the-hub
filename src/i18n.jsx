import { initialize, addResourceBundle, setLocale } from 'react-i18nify';

// Import your language files
import en from './locales/en.json';
import fr from './locales/fr.json';

// Initialize React-i18nify
initialize({
  fallbackLocale: 'en',
  locales: ['en', 'fr'],
});

// Add resource bundles
addResourceBundle('en', 'translation', en, true, false);
addResourceBundle('fr', 'translation', fr, true, false);

// Set the initial locale
setLocale('en');