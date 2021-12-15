/* eslint-disable ember/no-computed-properties-in-native-classes */
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class BookAbility extends Ability {
  @service('current-user') currentUser;
  @service session;

  // Dependencies are required to be declared statically in computed properties.
  // Properties accessed within the computed property function that are not
  // listed out are assumed to be missing dependencies.
  @computed('currentUser.user.username', 'model.username')
  get canEdit() {
    if (this.currentUser.user === undefined) {
      return false;
    } else {
      return this.currentUser.user.username === this.model.username;
    }
  }

  @alias('canEdit') canDelete;

  @alias('session.isAuthenticated') canCreate;
}
