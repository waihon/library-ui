import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookEditRoute extends Route {
  @service abilities;

  model({ id }) {
    return this.store.findRecord('book', id);
  }

  afterModel(model) {
    if (this.abilities.cannot('edit book', model)) {
      return this.transitionTo('book.detail', model.id);
    }
  }
}
