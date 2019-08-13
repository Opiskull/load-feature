import { customElement, bindable, view } from 'aurelia-framework';
import template from "./display.html";

@customElement("display")
@view({ template })
export class Display {
  @bindable type: any;

  activate(tile: any) {
    this.type = tile.type;

  }
}
