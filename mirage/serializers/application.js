import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  // Make the Mirage serializer returns a response very similar to what our
  // real bankend does.
  links(resource) {
    let { id, modelName } = resource;
    if (modelName === 'author') {
      return {
        books: {
          related: `/authors/${id}/books`,
          self: `/authors/${id}/relationships/books`,
        },
      };
    }
    if (modelName === 'book') {
      return {
        author: {
          related: `/books/${id}/author`,
          self: `/books/${id}/relationships/author`,
        },
        reviews: {
          related: `/books/${id}/reviews`,
          self: `/books/${id}/relationships/reviews`,
        },
      };
    }
    if (modelName === 'review') {
      return {
        book: {
          related: `/reviews/${id}/book`,
          self: `/reviews/${id}/relationships/book`,
        },
      };
    }
  },
});
