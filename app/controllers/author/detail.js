import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailController extends Controller {
  @service router;

  @action
  deleteAuthor(author) {
    // Schedule a model to be deleted, i.e. it doesn't make a network request
    // to the server.
    author.deleteRecord();
    // Send a network request to the server to save the changes, i.e. delete
    // an author in this case.
    author.save().then(() => {
      // Wait for the saving to be completed first before transitioning.
      this.router.transitionTo('author.index');
    });
  }
}
