import { view, customElement } from "aurelia-framework";
import template from "./test-component.html"

@view(template)
@customElement("test-component")
export class TestComponent {
  message: string;

  constructor() {
    this.message = 'Test Component';
  }
}
