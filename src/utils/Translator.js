import I18n from 'i18n-js';
import formatMessage from 'format-message';
import TranslationEnum from '../enum/TranslationEnum';

const localeEN = require('../static/locale/locale-en.json');
const localeES = require('../static/locale/locale-es.json');

const initLocaleWithDefaultLanguage = (defaultLocale = 'en') => {
  I18n.defaultLocale = defaultLocale;
  I18n.locale = defaultLocale;
  I18n.fallbacks = true;
};

const translations = {
  en: localeEN,
  es: localeES,
};

I18n.translations = translations;

formatMessage.setup({
  locale: I18n.locale,
  translations,
});

const getFormatedMessage = (id, options = {}) => {
  formatMessage.setup({
    locale: I18n.locale,
    translations: I18n.translations,
  });
  return formatMessage(id, options);
};

const translate = (id, options = {}) => {
  return TranslationEnum[id] !== undefined
    ? getFormatedMessage(id, options)
    : '__COPY_ID_NOT_FOUND__';
};

export { initLocaleWithDefaultLanguage, translate };
