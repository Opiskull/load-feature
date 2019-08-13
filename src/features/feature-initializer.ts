import { State } from './../state';

import { IFeature } from './interfaces';
import { autoinject } from 'aurelia-framework';
@autoinject()
export class FeatureInitializer {
  constructor(private state: State) { }

  public async initialize(...features: IFeature[]): Promise<void> {
    for (const feature of features) {
      if (feature.contents) {
        feature.contents.forEach(c => this.state.contents[c.type] = c);
      }
      if (feature.settings) {
        feature.settings.forEach(s => this.state.settings[s.id] = s);
      }
      if (feature.initialize) {
        await feature.initialize();
      }
    }
  }
}
