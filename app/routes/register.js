import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

// UnauthenticatedRouteMixin is going to check if a user is logged in and if
// they are it's going to redirect them to the index route.
export default class RegisterRoute extends Route.extend(
  UnauthenticatedRouteMixin
) {
  model() {
    return {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    };
  }
}
