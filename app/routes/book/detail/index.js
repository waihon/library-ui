import Route from '@ember/routing/route';

export default class BookDetailIndexRoute extends Route {
  model() {
    // Below is not required technically because Ember would inherit
    // the model from the parent route if no new dynamic segments
    // are added to a route's path.
    // We want to be explicit here so that the intention is clear
    // year down the road.
    return this.modelFor('book.detail');
  }
}
