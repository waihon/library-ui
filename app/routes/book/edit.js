import Route from '@ember/routing/route';

export default class BookEditRoute extends Route {
  model({ id }) {
    return this.store.findRecord('book', id);
  }
}
