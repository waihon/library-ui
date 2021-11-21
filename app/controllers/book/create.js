import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BookCreateController extends Controller {
  @service router;
  // Using @selected={{@model.author}} in the tempalte and updating
  // this.model.author with author in the selectAuthor function doesn't
  // seem to populate the dropdown with the selected author.
  // So, we define  tracked property instead.
  @tracked selectedAuthor;

  @action
  selectAuthor(author) {
    this.selectedAuthor = author;
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query } });
  }

  @action
  saveBook(event) {
    // Stop the browser from reloading due to form submission
    event.preventDefault();

    this.model.author = this.selectedAuthor;
    const book = this.store.createRecord('book', this.model);

    book.save().then(() => {
      this.router.transitionTo('book');
    });
  }
}
