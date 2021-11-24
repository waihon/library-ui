import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailNewBookController extends Controller {
  @service router;

  @action saveBook(event) {
    event.preventDefault();

    let book = this.store.createRecord('book', this.model.book);

    book.save().then(() => {
      this.router.transitionTo('author.detail', this.model.author.id);
    });
  }
}
