import Route from '@ember/routing/route';

export default class AuthorCreateRoute extends Route {
  // The model function is run everytime we enter the route
  model() {
    return {
      first: '',
      last: '',
    };
  }
}
