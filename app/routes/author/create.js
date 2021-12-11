import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class AuthorCreateRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  // The model function is run everytime we enter the route
  model() {
    return {
      first: '',
      last: '',
    };
  }
}
