import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookDetailController extends Controller {
  @service router;

  @action
  deleteBook(book) {
    book.destroyRecord().then(() => {
      this.router.transitionTo('book');
    });
  }
}
