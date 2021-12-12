import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookDetailController extends Controller {
  @service router;
  @service abilities;

  @action
  deleteBook(book) {
    if (this.abilities.can('delete book', book)) {
      book.destroyRecord().then(() => {
        this.router.transitionTo('book');
      });
    }
  }
}
