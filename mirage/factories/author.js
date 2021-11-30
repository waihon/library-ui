import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  first: () => faker.name.firstName(),
  last: () => faker.name.lastName(),
  afterCreate(author, server) {
    // Simulate some authors don't have any book.
    server.createList('book', faker.datatype.number({ min: 0, max: 5 }), {
      author,
    });
  },
});
