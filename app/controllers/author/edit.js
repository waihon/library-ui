import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorEditController extends Controller {
  @service router;

  @action
  saveAuthor(formValues) {
    this.model.setProperties(formValues);

    this.model
      .save()
      .then(() => {
        this.router.transitionTo('author');
      })
      .catch((e) => {
        // Otherwise, the author edited above still exists in the local store.
        this.model.rollbackAttributes();
      });
  }
}
