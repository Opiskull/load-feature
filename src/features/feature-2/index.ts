import { IFeature } from '../interfaces';
import { Edit } from './edit';
import { Display } from './display';

export const config: IFeature = {
  id: 'feature-2',
  name: 'feature-2',
  description: 'feature-2 description', contents: [
    {
      type: "not-so-simple-block-1",
      edit: Edit,
      display: Display,
      description: "not-so-simple-block-1"
    }
  ]
}

export default config;
