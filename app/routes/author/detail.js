import Route from '@ember/routing/route';

export default class AuthorDetailRoute extends Route {
  // Destructure out the id value of the params object
  model({ id }) {
    return {
      first: 'J.K.',
      last: 'Rowling',
      id: `author-${id}`,
    }
  }
}
