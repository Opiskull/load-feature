import { autoinject } from 'aurelia-framework';
@autoinject()
export class TestRoute2 {
  message: string;

  constructor() {
    this.message = 'Test Route 2';
  }
}
