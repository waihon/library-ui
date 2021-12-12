import Model, { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') first;
  @attr('string') last;
  @attr() username;

  @hasMany('book') books;

  get fullName() {
    return `${this.last}, ${this.first}`;
  }
}
