/* eslint-disable ember/no-computed-properties-in-native-classes */
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default class ReviewAbility extends Ability {
  @service session;

  @alias('session.isAuthenticated') canCreate;
}
