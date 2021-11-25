import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | books', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List books', async function(assert) {
    let king = this.server.create('author', {
      first: 'Stephen',
      last: 'Stephen',
    });
    let rowling = this.server.create('author', {
      first: 'J.K.',
      last: 'Rowling',
    });
    this.server.create('book', {
      title: 'The Dark Tower: The Gunslinger',
      isbn: '9780937986509',
      publishDate: '1998-01-01',
      author: king
    });
    this.server.create('book', {
      title: 'Harry Potter and the Chamber of Secrets',
      isbn: '0747538492',
      publishDate: '1998-07-02',
      author: rowling
    });

    await visit('/books');
    assert.equal(currentURL(), '/books');

    assert
      .dom('[data-test-book-link]')
      .exists({ count: 2 }, 'All book links are rendered');

    assert
      .dom('[data-test-book-list-item]:first-child')
      .containsText(
        'The Dark Tower: The Gunslinger 9780937986509',
        'The first book list item contains the correct book title'
      );

    assert
      .dom('[data-test-book-list-item]:last-child')
      .containsText(
        'Harry Potter and the Chamber of Secrets 0747538492',
        'The other book list item contains the correct book title'
      );
  });
});
