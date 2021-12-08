import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @service session;
  @service('current-user') currentUser;

  @action
  logout(event) {
    event.preventDefault();

    this.session.invalidate();
  }
}
