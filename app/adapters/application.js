import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'library-ui/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // apiHost is defined in config/environment.js for both development
  // and production but not for test which uses Mirage as a mock server.
  host = ENV.apiHost ?? '';
}
