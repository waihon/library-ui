import Route from '@ember/routing/route';

export default class AuthorDetailNewBookRoute extends Route {
  model() {
    const author = this.modelFor('author.detail');

    return {
      author,
      book: {
        title: '',
        isbn: '',
        publishDate: '',
        author,
      },
    };
  }
}
