import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class BookDetailNewReviewRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  model() {
    let book = this.modelFor('book.detail');

    return {
      book,
      review: {
        user: '',
        body: '',
        book,
      },
    };
  }
}
