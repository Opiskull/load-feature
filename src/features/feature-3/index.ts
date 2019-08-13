import { IFeatureFlag } from '../interfaces';
import { PLATFORM } from 'aurelia-pal';

PLATFORM.moduleName("./index");

export const config: IFeatureFlag = {
  id: 'feature-3',
  name: 'feature-3',
  description: 'feature-3 description'
}

export default config;
