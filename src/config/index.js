import {vestelConfig} from './vestel';
import {imConfig} from './im';
import Config from 'react-native-config';

// This can be set through environment variables or build configuration
const BRAND = 'im';

export const getConfig = () => {
  switch (BRAND) {
    case 'vestel':
      return vestelConfig;
    case 'im':
      return imConfig;
    default:
      return vestelConfig;
  }
};

export const config = getConfig();
