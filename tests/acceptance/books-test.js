import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /books', async function(assert) {
    await visit('/books');

    assert.equal(currentURL(), '/books');
  });
});
