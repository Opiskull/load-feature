
import { FeatureFlag } from './feature-flag';
import { customElement, view, bindable } from 'aurelia-framework';
import { IFeatureFlag, EnabledFeatures } from './interfaces';
import template from "./feature-flags.html";

@view({ template, dependencies: [FeatureFlag] })
@customElement("feature-flags")
export class FeatureFlags {
  @bindable() public features: IFeatureFlag[];

  public apply() {
    const enabled: EnabledFeatures = {};
    this.features.forEach(f => enabled[f.id] = f.enabled);
    localStorage.setItem("feature-flags", JSON.stringify(enabled));
  }

  public featuresChanged() {
    if (!this.features) {
      return;
    }
    const enabled: EnabledFeatures = JSON.parse(localStorage.getItem("feature-flags")) || {};
    this.features.forEach(f => f.enabled = enabled[f.id]);
  }
}
