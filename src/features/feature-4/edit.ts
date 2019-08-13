import { view, customElement, resource } from 'aurelia-framework';
import template from './edit.html';
import { TestComponent } from './test-component';

@view({ template, dependencies: [TestComponent] })
@customElement("edit")
export class Edit {
  msg = "Edit Feature 4"
}
