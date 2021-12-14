import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { computed } from '@ember/object';

export default class ReviewAbility extends Ability {
  @service session;

  @computed('session.isAuthenticated')
  get canCreate() {
    return this.session.isAuthenticated;
  }
}
