import { FeatureFlagsService } from '../feature-flags/feature-flags-service';
import { State } from '../feature-flags/state';
import { FeatureService } from '../feature-flags/feature-service';
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { IEnabledFeatures, IFeatureFlag } from 'feature-flags/interfaces';

@autoinject()
export class Features {

  constructor(private featureService: FeatureService, private state: State,
    private featureFlagsService: FeatureFlagsService, private eventAggregator: EventAggregator) { }

  async attached() {
    this.state.features = (await this.featureService.getAllAvailable()) as IFeatureFlag[];
    this.state.enabled = this.featureFlagsService.load();
    this.eventAggregator.subscribe("features:enabled", (enabled: IEnabledFeatures) => {
      this.featureFlagsService.save(enabled);
    })
  }
}
