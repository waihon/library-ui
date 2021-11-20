import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookCreateController extends Controller {
  @action
  selectAuthor(author) {
    console.log(author);
  }
}
