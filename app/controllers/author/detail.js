import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorDetailController extends Controller {
  @action
  deleteAuthor() {
    console.log(this);
    window.alert('Delete Author');
  }
}
