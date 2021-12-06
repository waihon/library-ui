import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr() email;
  @attr() username;
  @attr() password;
  @attr() passwordConfirmation;
}
