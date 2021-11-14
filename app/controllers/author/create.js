import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorCreateController extends Controller {
  @service router;

  @action
  saveAuthor(event) {
    // Prevent the default behaviour of submitting a form:
    // sending a network request and clering the fields.
    event.preventDefault();

    // Create an author locally
    let author = this.store.createRecord('author', this.model);

    author.save().then(() => {
      this.router.transitionTo('author');
    });
  }
}
