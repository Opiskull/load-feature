import { IFeatureFlag } from '../interfaces';
import { PLATFORM } from 'aurelia-pal';

PLATFORM.moduleName("./index");

export const config: IFeatureFlag = {
  id: 'feature-2',
  name: 'feature-2',
  description: 'feature-2 description'
}

export default config;
