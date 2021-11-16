import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | authors', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List authors', async function (assert) {
    this.server.create('author', { first: 'Stephen', last: 'King' });
    this.server.create('author', { first: 'J.K.', last: 'Rowling' });

    await visit('/authors');
    assert.equal(currentURL(), '/authors');

    assert
      .dom('[data-test-lib="author-link"]')
      .exists({ count: 2 }, 'All author links are rendered');

    assert
      .dom('[data-test-lib="author-list-item"]:first-child')
      .hasText(
        'King, Stephen',
        'The first author list item contains the author name'
      );

    assert
      .dom('[data-test-lib="author-list-item"]:last-child')
      .hasText(
        'Rowling, J.K.',
        'The other author list item contains the author name'
      );
  });
});
