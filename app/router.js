import EmberRouter from '@ember/routing/router';
import config from 'library-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('author', { path: '/authors' }, function () {
    this.route('detail', { path: '/:id' });
    this.route('create');
    // The full path has to be unique. SInce '/:id' has been used by
    // the detail route, we add '/edit' to '/:id' to make it unique.
    this.route('edit', { path: '/:id/edit' });
  });
  this.route('book', { path: '/books' }, function () {
    this.route('create');
  });
});
