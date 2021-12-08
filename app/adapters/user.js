import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  urlForQueryRecord(query) {
    if (query.me) {
      // '/users?me=true' exists so let's delete it...
      delete query.me;

      // ... and replace it with '/users/me'.
      return `${super.urlForQueryRecord(...arguments)}/me`;
    }

    return super.urlForQueryRecord(...arguments);
  }
}
