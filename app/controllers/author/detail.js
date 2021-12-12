import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailController extends Controller {
  @service router;
  @service abilities;

  @action
  deleteAuthor(author) {
    // Instead of separately calling deleteRecord() and save(), we can use
    // destroyRecord() and delete a record and save it right away.
    // Similar to save(), destroyRecord() also returns a promise. So, we
    // can wait for it to complete first before doing next step.
    if (this.abilities.can('delete author', author)) {
      author.destroyRecord().then(() => {
        // Wait for the saving to be completed first before transitioning.
        this.router.transitionTo('author.index');
      });
    }
  }
}
