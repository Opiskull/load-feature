import { FeatureService } from '../features/feature-service';
import { autoinject } from 'aurelia-framework';
import { IFeatureFlag } from '../features/interfaces';

@autoinject()
export class Features {
  public features: IFeatureFlag[];

  constructor(private featureService: FeatureService) { }

  async attached() {
    this.features = await this.featureService.getAllAvailable();
  }
}
