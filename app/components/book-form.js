import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default class BookFormComponent extends Component {
  @service store;
  @tracked title;
  @tracked isbn;
  @tracked publishDate;
  @tracked selectedAuthor;

  constructor() {
    super(...arguments);

    const { title, isbn, publishDate, author } = this.args.book;

    this.title = title;
    this.isbn = isbn;
    this.publishDate = publishDate;
    this.selectedAuthor = author;
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query } });
  }

  @action
  selectAuthor(author) {
    this.selectedAuthor = author;
  }

  @action
  submitChanges(event) {
    event.preventDefault();

    this.args.onSubmit({
      title: this.title,
      isbn: this.isbn,
      publishDate: this.publishDate,
      author: this.selectedAuthor,
    });
  }

  @task
  *searchAuthorTask(query) {
    // Invoke API server after 500 ms instead of after every keystroke
    yield timeout(500);
    return this.store.query('author', { filter: { query } });
  }
}
