import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  constructor() {
    super(...arguments);

    const { email, password } = this.args.user;

    this.email = email;
    this.password = password;
  }

  @action
  login(event) {
    event.preventDefault();

    this.args.onSubmit({
      email: this.email,
      password: this.password,
    });
  }
}
