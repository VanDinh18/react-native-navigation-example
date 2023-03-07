import {createText} from '@shopify/restyle';
import i18next from 'i18next';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Theme} from 'themes';

const Text = createText<Theme>();

interface I18ParamsProps {
  i18Param?: any;
}

interface TextWithOriginValue extends I18ParamsProps {
  origin: string;
  i18Text?: never;
}

interface TextWithI18nValue extends I18ParamsProps {
  origin?: never;
  i18Text: string;
}

type I18nTextProps = TextWithOriginValue | TextWithI18nValue;

type Props = React.ComponentProps<typeof Text> & I18nTextProps;

const BaseText = ({origin, i18Text, i18Param, ...props}: Props) => {
  const {t} = useTranslation();

  let value: any;

  if (origin) {
    value = origin;
  } else if (i18Text || i18next.exists(i18Text || '', i18Param)) {
    value = t(i18Text || '', i18Param);
  } else {
    value = i18Text || '';
  }

  return <Text {...props}>{value}</Text>;
};

export default BaseText;
