import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
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

  test('Create an author', async function (assert) {
    this.server.create('author', { first: 'Stephen', last: 'King' });

    await visit('/authors');
    await click('[data-test-lib="new-author-button"]');
    await fillIn('[data-test-lib="new-author-first-name"]', 'J.K.');
    await fillIn('[data-test-lib="new-author-last-name"]', 'Rowling');
    await click('[data-test-lib="save-author-button"]');

    assert
      .dom('[data-test-lib="author-link"]')
      .exists({ count: 2 }, 'A new author link is rendered');

    assert
      .dom('[data-test-lib="author-list-item"]:last-child')
      .hasText('Rowling, J.K.', 'The new author is rendered as the last item');
  });
});
