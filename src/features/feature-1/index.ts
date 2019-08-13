import { Display } from './display';
import { IFeature } from './../interfaces';
import { Edit } from "./edit";

export const config: IFeature = {
  id: 'feature-1',
  name: 'feature-1',
  description: 'feature-1 description',
  contents: [
    {
      type: "simple-block-1",
      edit: Edit,
      display: Display,
      description: "simple-block-1"
    }
  ]
}

export default config;
