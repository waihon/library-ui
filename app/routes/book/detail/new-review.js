import Route from '@ember/routing/route';

export default class BookDetailNewReviewRoute extends Route {
  model() {
    let book = this.modelFor('book.detail');

    return {
      book,
      review: {
        user: '',
        body: '',
        book,
      },
    };
  }
}
