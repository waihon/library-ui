import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class BookCreateRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  model() {
    return {
      title: '',
      isbn: '',
      publishedDate: null,
      author: null,
    };
  }
}
