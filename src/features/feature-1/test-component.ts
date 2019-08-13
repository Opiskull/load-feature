import { view, bindable, customElement } from "aurelia-framework";
import template from './test-component.html';

@view({ template })
@customElement("test-component")
export class TestComponent {
  @bindable() message: string;

  constructor() {
    this.message = 'Test Component Feature 1';
  }
}
