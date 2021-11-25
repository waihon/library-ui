import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /books', async function(assert) {
    await visit('/books');

    assert.equal(currentURL(), '/books');
  });
});
