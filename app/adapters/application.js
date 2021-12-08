import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'library-ui/config/environment';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  // `apiHost` is defined in config/environment.js for production environment
  // but not for development and test environments.
  // For development environment:
  // * Without specifying a proxy when serving the Ember app, Mirage will be
  //   used as a mock server.
  // * By specifyng a proxy when serving the Ember app, the proxy will be used
  //   as a server instead.
  // For test environment:
  // * Since Ember CLI Mirage is enabled in environment.js, Mirage will always
  //   be used as a mock server.
  host = ENV.apiHost ?? '';

  get headers() {
    let session = this.session;

    if (session.isAuthenticated) {
      return {
        // authenticated: {
        //   authenticator: "authenticator:jwt",
        //   exp: 15271976i8,
        //   token: 'eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjp7ImlkIjo2LCJ1c2VybmFtZ...'
        // }
        Authorization: `Bearer ${session.data.authenticated.token}`,
      };
    }

    return {};
  }
}
