import { IEnabledFeatures, IFeatureFlag } from './interfaces';
import { autoinject } from 'aurelia-framework';
@autoinject()
export class State {
  public enabled: IEnabledFeatures = {};
  public features: IFeatureFlag[] = [];
}
