export default function () {
  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:
    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  this.get('/authors', function (schema, request) {
    let authors;
    let query = request.queryParams['filter[query]'];

    if (query) {
      authors = schema.authors.where((author) => {
        return (
          author.first.toLowerCase().includes(query.toLowerCase()) ||
          author.last.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {
      authors = schema.authors.all();
    }
    return authors;
  });
  this.get('/authors/:id');
  this.get('/authors/:id/books', function (schema, request) {
    let id = request.params.id;
    // For each Mirage model that we define, a corresponding collection can be accessed
    // on the schema.
    // The books collection is found on schema.books, authors are on schema.authors.
    // We return all books whose authorId matches the id in the rquest.
    return schema.books.where({ authorId: id });
  });
  this.post('/authors');
  this.patch('/authors/:id');
  this.del('/authors/:id');

  this.get('/books', function (schema, request) {
    let books;
    let query = request.queryParams['filter[query]'];

    if (query) {
      books = schema.books.where((book) => {
        return (
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.isbn.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {
      books = schema.books.all();
    }
    return books;
  });
  this.get('/books/:id');
  this.get('/books/:id/author', function (schema, request) {
    let id = request.params.id;
    const book = schema.books.find(id);
    return schema.authors.find(book.authorId);
  });
  this.post('/books');
  this.patch('/books/:id');
  this.del('/books/:id');
}
