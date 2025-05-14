import {imConfig} from './im';

// This can be set through environment variables or build configuration
const BRAND = 'im';

export const getConfig = () => {
  return imConfig;
};

export const config = getConfig();
