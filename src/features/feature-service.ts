import { autoinject } from "aurelia-framework";
import { IFeatureFlag } from "./interfaces";

@autoinject()
export class FeatureService {
  public getAllAvailable(): Promise<IFeatureFlag[]> {
    return Promise.all(["feature-1", "feature-2", "feature-3", "feature-4"].map(name => this.importFeature(name)));
  }

  private async importFeature(feature: string): Promise<IFeatureFlag> {
    switch (feature) {
      case 'feature-1':
        return (await import(/* webpackChunkName: "feature-1" */"./feature-1/index")).default;
      case 'feature-2':
        return (await import(/* webpackChunkName: "feature-2" */"./feature-2/index")).default;
      case 'feature-3':
        return (await import(/* webpackChunkName: "feature-3" */"./feature-3/index")).default;
      case 'feature-4':
        return (await import(/* webpackChunkName: "feature-4" */"./feature-4/index")).default;
      default:
        throw new Error("No Valid Feature")
    }
  }
}
