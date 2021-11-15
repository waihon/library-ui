import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class AuthorController extends Controller {
  @tracked search = '';
}
