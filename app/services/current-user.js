import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentUserService extends Service {
  @service store;
  @tracked user;

  load() {
    this.store.queryRecord('user', { me: true }).then((user) => {
      // queryRecord() expects a single result object instead of a list of
      // objects as expected by query().
      // Without any cutom adapter, this queryRecord call will try to
      // invoke '/users?me=true' by default.
      // The URL to get the current user is actually '/users/me'.
      // So, we need to define a custom adapter for the user model in order
      // for Ember Data to make the right request for us.
      this.user = user;
    });
  }
}
