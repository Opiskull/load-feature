import { Edit } from './edit';
import { IFeatureFlag } from '../interfaces';
import { PLATFORM } from 'aurelia-pal';

PLATFORM.moduleName("./index");

export const config: IFeatureFlag = {
  id: 'feature-4',
  name: 'feature-4',
  description: 'feature-4 description',
}

export default config;
