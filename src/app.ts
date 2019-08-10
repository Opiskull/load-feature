import { Aurelia, FrameworkConfiguration, autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { Router, RouterConfiguration, activationStrategy } from "aurelia-router";

@autoinject
export class App {
  public message: string = 'Hello App!';
  public router: Router;

  constructor(private aurelia: Aurelia) {

  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'test-route-1'], moduleId: PLATFORM.moduleName('./routes/test-route-1'),
        nav: false, title: 'TestRoute1', activationStrategy: activationStrategy.replace
      },
      {
        route: 'test-route-2', moduleId: PLATFORM.moduleName('./routes/test-route-2'),
        nav: false, title: 'TestRoute2', activationStrategy: activationStrategy.replace
      },
    ]);
    this.router = router;
  }

  public loadFeature1() {
    return new FrameworkConfiguration(this.aurelia)
      .feature(PLATFORM.moduleName('feature-1/index'))
      .apply();
  }
}
