import { FeatureService } from './../feature-flags/feature-service';
import { FeatureInitializer } from './../features/feature-initializer';
import { customElement } from "aurelia-framework";

@customElement('blocks')
export class Blocks {

  public tiles: any[] = [
    { type: 'simple-block-1' },
    { type: 'not-so-simple-block-1' },
    { type: 'simple-block-1' },
    { type: 'not-so-simple-block-1' }
  ]

  constructor(private featureInitializer: FeatureInitializer, private featureService: FeatureService) {

  }

  public getDisplayVm(tile: { type: string }) {
    const content = this.featureInitializer.contents[tile.type];

    if (content == undefined) {
      throw Error("Invalid Type");
    }

    return content.display;
  }

  async activate() {
    const features = await this.featureService.getAllAvailable();
    await this.featureInitializer.initialize(...features);
  }
}
