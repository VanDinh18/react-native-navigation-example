import {en} from 'languages';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
    };
  }
}
