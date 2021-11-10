import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  model() {
    return fetch('http://localhost:3000/authors')
      .then(response => response.json());
  }
}
