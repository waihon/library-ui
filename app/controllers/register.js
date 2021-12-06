import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {
  @service router;
  @tracked errors;

  @action saveUser(attrs) {
    let user = this.store.createRecord('user', attrs);

    user
      .save()
      .then(() => {
        this.router.transitionTo('index');
      })
      .catch(() => {
        this.errors = user.errors;
      });
  }
}
