import { FeatureFlagsService } from './feature-flags-service';
import { State } from './state';
import { FeatureFlag } from './feature-flag';
import { customElement, view, bindable } from 'aurelia-framework';
import { IFeatureFlag, EnabledFeatures } from './interfaces';
import template from "./feature-flags.html";
import { EventAggregator } from 'aurelia-event-aggregator';

@view({ template, dependencies: [FeatureFlag] })
@customElement("feature-flags")
export class FeatureFlags {
  @bindable({ changeHandler: 'enabledOrFeatureChanged' }) public features: IFeatureFlag[];
  @bindable({ changeHandler: 'enabledOrFeatureChanged' }) public enabled: EnabledFeatures;

  constructor(private eventAggregator: EventAggregator) {

  }

  public apply() {
    this.features.forEach(f => this.enabled[f.id] = f.enabled);
    this.eventAggregator.publish("features:enabled", this.enabled);
  }

  public enabledOrFeatureChanged() {
    if (!this.features || !this.enabled) {
      return;
    }
    this.features.forEach(f => f.enabled = this.enabled[f.id]);
  }
}
