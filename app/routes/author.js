import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  model() {
    // /authors?filter[query]=J
    return this.store.query('author', {
      filter: {
        query: 'J',
      }
    });

    return this.store.findAll('author');
  }
}
