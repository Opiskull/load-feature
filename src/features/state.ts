import { EnabledFeatures, IFeatureFlag } from './interfaces';
import { autoinject } from 'aurelia-framework';
@autoinject()
export class State {
  public enabled: EnabledFeatures = {};
  public features: IFeatureFlag[] = [];
}
