import { IFeature } from './../features/interfaces';
import { autoinject } from "aurelia-framework";

@autoinject()
export class FeatureService {
  public getAllAvailable(): Promise<IFeature[]> {
    return Promise.all(["feature-1", "feature-2", "feature-3", "feature-4"].map(name => this.importFeature(name)));
  }

  private async importFeature(feature: string): Promise<IFeature> {
    switch (feature) {
      case 'feature-1':
        return (await import(/* webpackChunkName: "feature-1" */"../features/feature-1/index")).default;
      case 'feature-2':
        return (await import(/* webpackChunkName: "feature-2" */"../features/feature-2/index")).default;
      case 'feature-3':
        return (await import(/* webpackChunkName: "feature-3" */"../features/feature-3/index")).default;
      case 'feature-4':
        return (await import(/* webpackChunkName: "feature-4" */"../features/feature-4/index")).default;
      default:
        throw new Error("No Valid Feature")
    }
  }
}
