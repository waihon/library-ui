import data from '../data';

export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // server.createList('post', 10);

  data.authors.map((author) => {
    server.create('author', author);
  });

  data.books.map((book) => {
    server.create('book', book);
  });

  data.reviews.map((review) => {
    server.create('review', review);
  });
}
