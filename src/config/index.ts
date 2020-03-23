import i18n from 'i18n-js';

import ru from './locales/ru.json';

enum LOCALES {
  RU = 'ru',
}

i18n.defaultLocale = LOCALES.RU;
i18n.locale = LOCALES.RU;
i18n.fallbacks = true;
i18n.translations = { ru };

export default i18n;
