import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookDetailNewReviewController extends Controller {
  @service router;

  @action
  saveReview(attrs) {
    let review = this.store.createRecord('review', attrs);

    review
      .save()
      .then(() => {
        this.router.transitionTo('book.detail', this.model.book.id);
      })
      .catch((e) => {
        // Otherwise, the review created above still exists in the local store.
        review.rollbackAttributes();
      });
  }
}
