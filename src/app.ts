import { autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { Router, RouterConfiguration } from "aurelia-router";

@autoinject
export class App {
  public message: string = 'Hello App!';
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['features', ''], moduleId: PLATFORM.moduleName('./routes/features'), title: 'Features', nav: true
      }, {
        route: ['blocks'], moduleId: PLATFORM.moduleName('./routes/blocks'), title: 'Blocks', nav: true
      }
    ]);
    this.router = router;
  }
}
