import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookEditController extends Controller {
  @service router;

  @action
  saveBook(attrs) {
    this.model.setProperties(attrs);

    // Alternative:
    // const { title, isbn, publishDate, author } = attrs;
    // this.model.title = title;
    // this.model.isbn = isbn;
    // this.model.publishDate = publishDate;
    // this.model.author = author;

    this.model.save().then(() => {
      this.router.transitionTo('book.detail', this.model.id);
    });
  }
}
