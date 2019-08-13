import { IContentBlock, ISettingsBlock, IFeature } from './interfaces';
export class FeatureInitializer {
  public contents: { [type: string]: IContentBlock } = {}
  public settings: { [id: string]: ISettingsBlock } = {}

  public async initialize(...features: IFeature[]): Promise<void> {
    for (const feature of features) {
      if (feature.contents) {
        feature.contents.forEach(c => this.contents[c.type] = c);
      }
      if (feature.settings) {
        feature.settings.forEach(s => this.settings[s.id] = s);
      }
      if (feature.initialize) {
        await feature.initialize();
      }
    }
  }
}
