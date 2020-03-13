import i18n from 'i18n-js';

import en from './locales/en.json';

enum LOCALES {
  EN = 'en',
}

i18n.defaultLocale = LOCALES.EN;
i18n.locale = LOCALES.EN;
i18n.fallbacks = true;
i18n.translations = { en };

export default i18n;
