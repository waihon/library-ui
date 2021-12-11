import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorCreateRoute extends Route {
  @service session;

  beforeModel() {
    if (!this.session.isAuthenticated) {
      this.transitionTo('login');
    }
  }

  // The model function is run everytime we enter the route
  model() {
    return {
      first: '',
      last: '',
    };
  }
}
