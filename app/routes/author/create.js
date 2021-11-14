import Route from '@ember/routing/route';

export default class AuthorCreateRoute extends Route {
  resetController(controller) {
    this._super(...arguments);

    controller.reset();
  }
}
