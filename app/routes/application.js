import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-mixins
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class ApplicationRoute extends Route.extend(
  ApplicationRouteMixin
) {
  @service session;
  @service('current-user') currentUser;

  // beforeModel is very similar to mode function in that it allows us to
  // wait for data to load in our application before continuing to render.
  // But beforeModel doesn't add any data into our controller or template.
  beforeModel() {
    super.beforeModel(...arguments);

    this.loadUser();
  }

  // Replaced this.session.on('authenticationSucceeded', () => {});
  sessionAuthenticated() {
    super.sessionAuthenticated(...arguments);

    this.loadUser();
  }

  // Replaced this.session.on('invalidationSucceeded', () => {});
  sessionInvalidated() {
    // There are still a lot of data that could be loaded into the memory
    // in our application. This means someone could get hold of information
    // that they shouldn't have access to even though the user has clicked
    // on Logout. Instead of using Ember's route transition or the default
    // logic provided by the ESA mixin (by calling super.sessionInvalidated(
    // ...arguments)), it's safer to use the browser's location API to change
    // the URL and load the entire page. That way, our application reloads
    // and no data is kept from one session to another.
    window.location.replace('/login');
  }

  loadUser() {
    if (this.session.isAuthenticated) {
      this.currentUser.load();
    }
  }
}
