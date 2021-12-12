import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default class AuthorEditRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  @service('current-user') currentUser;

  model({ id }) {
    return this.store.findRecord('author', id);
  }

  // afterModel function allows us to run logic after loading the model
  // but before rendering the template and finishing the transition.
  afterModel(model) {
    if (model.username !== this.currentUser.user.username) {
      this.transitionTo('author.detail', model.id);
    }
  }
}
