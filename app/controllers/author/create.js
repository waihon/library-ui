import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorCreateController extends Controller {
  @tracked first = '';
  @tracked last = '';

  @action
  changeFirst(value) {
    // Use value instead of event as the function's argument to make
    // the controller pure JavaScript.
    this.first = value;
  }
}
