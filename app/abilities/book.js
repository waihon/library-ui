import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { computed } from '@ember/object';

export default class BookAbility extends Ability {
  @service('current-user') currentUser;

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

  @computed('canEdit')
  get canDelete() {
    return this.canEdit;
  }
}
