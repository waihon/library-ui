import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'library-ui/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // `apiHost` is defined in config/environment.js for production environment
  // but not for development and test environments.
  // For development environment:
  // * Without specifying a proxy when serving the Ember app, Mirage will be
  //   used as a mock server.
  // * By specify a proxy when serving the Ember app, the proxy will be used
  //   as a server instead.
  // For test environment:
  // * Since Ember CLI Mirage is enabled in environment.js, Mirage will always
  //   be used as a mock server.
  host = ENV.apiHost ?? '';
}
