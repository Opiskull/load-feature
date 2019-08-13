
import { customElement, bindable, view, observable } from 'aurelia-framework';
import template from "./feature-flag.html";
import { IFeatureFlag } from './interfaces';

@view(template)
@customElement('feature-flag')
export class FeatureFlag {
  @bindable() public feature: IFeatureFlag;
}
