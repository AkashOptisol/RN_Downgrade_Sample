import {vestelConfig} from './vestel';

// This can be set through environment variables or build configuration
const BRAND = 'vestel';

export const getConfig = () => {
  return vestelConfig;
};

export const config = getConfig();
