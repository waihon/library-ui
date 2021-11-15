import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true,
    },
  };

  model({ search }) {
    if (search) {
      // Ember: /authors?search=value
      // API: /authors?filter[query]=value
      return this.store.query('author', {
        filter: {
          query: search,
        },
      });
    }

    return this.store.findAll('author');
  }
}
