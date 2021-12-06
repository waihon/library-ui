import Route from '@ember/routing/route';

export default class RegisterRoute extends Route {
  model() {
    return {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    };
  }
}
