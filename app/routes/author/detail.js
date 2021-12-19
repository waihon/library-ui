import Route from '@ember/routing/route';

export default class AuthorDetailRoute extends Route {
  // Destructure out the id value of the params object
  model({ id }) {
    return this.store.findRecord('author', id, {
      include: 'books',
    });
  }

  // This is meant for server side to wait for the loading of books before
  // rendering the page.
  afterModel(model) {
    return model.books;
  }
}
