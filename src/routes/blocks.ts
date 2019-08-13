import { State } from './../state';

import { customElement } from "aurelia-framework";

@customElement('blocks')
export class Blocks {

  public tiles: any[] = [
    { type: 'simple-block-1' },
    { type: 'not-so-simple-block-1' },
    { type: 'simple-block-1' },
    { type: 'not-so-simple-block-1' }
  ]

  constructor(private featureState: State) {

  }

  public getDisplayVm(tile: { type: string }) {
    const content = this.featureState.contents[tile.type];

    if (content == undefined) {
      throw Error("Invalid Type");
    }

    return content.display;
  }
}
