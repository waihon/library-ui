import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RegisterFormComponent extends Component {
  constructor() {
    super(...arguments);

    const { email, username, password, passwordConfirmation } = this.args.user;

    this.email = email;
    this.username = username;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
  }

  @action
  saveUser(event) {
    event.preventDefault();

    this.args.onSubmit({
      email: this.email,
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    });
  }
}
