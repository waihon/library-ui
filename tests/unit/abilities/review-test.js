import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Ability | review', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const ability = this.owner.lookup('ability:review');
    assert.ok(ability);
  });
});
