import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorDetailController extends Controller {
  @action
  deleteAuthor(author) {
    console.log(author);
    window.alert('Delete Author');
  }
}
