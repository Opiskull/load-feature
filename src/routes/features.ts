import { FeatureFlagsService } from './../features/feature-flags-service';
import { State } from './../features/state';
import { FeatureService } from '../features/feature-service';
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { EnabledFeatures } from 'features/interfaces';

@autoinject()
export class Features {

  constructor(private featureService: FeatureService, private state: State,
    private featureFlagsService: FeatureFlagsService, private eventAggregator: EventAggregator) { }

  async attached() {
    this.state.features = await this.featureService.getAllAvailable();
    this.state.enabled = this.featureFlagsService.load();
    this.eventAggregator.subscribe("features:enabled", (enabled: EnabledFeatures) => {
      this.featureFlagsService.save(enabled);
    })
  }
}
