import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @attr() title;
  @attr() isbn;
  @attr() publishDate;

  // 'author' refers an Ember model in our local application. 
  // author refers to that coming in from the API server, and
  // it's what the relationship is called.
  @belongsTo('author') author; 
}
