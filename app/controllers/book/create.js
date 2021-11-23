import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookCreateController extends Controller {
  @service router;

  @action
  saveBook(attrs) {
    // We cannot call setProperties on this.model like in book/edit.js
    // because this.model returns a POJO instead of an Ember object.
    const book = this.store.createRecord('book', attrs);

    book.save().then(() => {
      this.router.transitionTo('book');
    });
  }
}
