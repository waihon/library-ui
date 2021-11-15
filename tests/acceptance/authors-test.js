import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | authors', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /authors', async function (assert) {
    await visit('/authors');

    assert.equal(currentURL(), '/authors');
  });
});
