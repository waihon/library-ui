import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;
  @service router;
  @tracked errors;

  @action
  login(attrs) {
    this.session
      .authenticate('authenticator:jwt', {
        email: attrs.email,
        password: attrs.password,
      })
      // Instead of always transitioning to the index route, we want to
      // sometines transition to a different route.
      // We let ember-simple-auth to handle that for us by itself.
      // Therefore, we don't have to specify `.then()` here.
      .catch((e) => {
        // e = {
        //   statusText: 'Unauthorized',
        //   status: 401,
        //   headers: Headers,
        //   text: '{"errors":[{"status":401,"title":"Unauthorized","detail":"Error logging in user with that email and password"}]}'
        //   json: { errors: [{ status: 401, title: "Unauthorized", detail: "Error logging in user with that email and password" }] }
        // }
        this.errors = e.json.errors;
      });
  }
}
