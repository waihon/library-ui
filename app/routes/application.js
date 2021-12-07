import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;

  constructor() {
    super(...arguments);

    this.session.on('invalidationSucceeded', () => {
      // There are still a lot of data that could be loaded into the memory
      // in our application. This means someone could get hold of information
      // that they shouldn't have access to even though the user has clicked
      // on Logout. Instead of using Ember's route transition, it's safer to
      // use the browser's location API to change the URL and load the entire
      // page. That way, our application reloads and no data is kept from
      // one session to another.
      window.location.replace('/login');
    });
  }
}
