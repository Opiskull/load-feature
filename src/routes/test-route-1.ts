import { autoinject } from 'aurelia-framework';
@autoinject()
export class TestRoute {
  message: string;

  constructor() {
    this.message = 'Test Route 1';
  }
}
