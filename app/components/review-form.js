import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ReviewFormComponent extends Component {
  // Component arguments:
  // * review: A new review object
  // * book: An existing book object for the new review
  // * onSubmit: A function to be called when the form is submitted

  constructor() {
    super(...arguments);

    const { body, book } = this.args.review;

    this.body = body;
    this.book = book;
  }

  @action
  submitChanges(event) {
    event.preventDefault();

    this.args.onSubmit({
      body: this.body,
      book: this.book,
    });
  }
}
