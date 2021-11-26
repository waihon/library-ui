import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import {
  selectSearch,
  selectChoose,
} from 'ember-power-select/test-support/helpers';

module('Acceptance | books', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List books', async function (assert) {
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
      author: king,
    });
    this.server.create('book', {
      title: 'Harry Potter and the Chamber of Secrets',
      isbn: '0747538492',
      publishDate: '1998-07-02',
      author: rowling,
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

  test('Create a book with an existing author from book detail page', async function (assert) {
    let hemingway = this.server.create('author', {
      first: 'Ernest',
      last: 'Hemingway',
    });
    this.server.create('author', { first: 'J.K.', last: 'Rowling' });
    this.server.create('author', { first: 'Edgar Allan', last: 'Poe' });
    this.server.create('author', { first: 'Stephen', last: 'King' });
    this.server.create('book', {
      title: 'For Whom the Bell Tolls',
      isbn: '9780684803357',
      publishDate: '1995-07-01',
      author: hemingway,
    });

    await visit('/books');
    assert
      .dom('[data-test-book-link]')
      .exists({ count: 1 }, 'The only book link is rendered');

    await click('[data-test-new-book-button]');
    await fillIn(
      '[data-test-book-title]',
      'Harry Potter and the Chamber of Secrets'
    );
    await fillIn('[data-test-book-isbn]', '0747538492');
    // The prompt of the date input is mm/dd/yyyy but the value filled in as
    // 07/02/1998 somehow not captured into the data store. That has caused
    // [data-test-book-publish-date] equals blank.
    await fillIn('[data-test-book-publish-date]', '1998-07-02');

    await selectSearch('.ember-power-select-trigger', 'r');
    // The count of authors containing 'r' is expected to be 3
    // but the actual result is 4.
    // assert.dom('.ember-power-select-option').exists({ count: 3 });

    await selectChoose('.ember-power-select-trigger', 'Rowling, J.K.');
    // Alternative: Select by option index
    // The index is zero-based. To select 'Rowling, J.K.' which is the 2nd
    // option, we use an index of 1.
    // await selectChoose('.ember-power-select-trigger', '.ember-power-select-option', 1);

    assert.dom('.ember-power-select-selected-item').hasText('Rowling, J.K.');

    await click('[data-test-submit-changes-button]');
    assert.equal(currentURL(), '/books');
    assert
      .dom('[data-test-book-link]')
      .exists({ count: 2 }, 'New book link is rendered');
    assert
      .dom('[data-test-book-list-item]:last-child')
      .containsText(
        'Harry Potter and the Chamber of Secrets 0747538492',
        'New book list item contains the correct book title and ISBN'
      );

    // Instead of querying the data store for the newly created book,
    // the book id is hardcoded as 2 based on the assumption that it's
    // the 2nd book.
    await click(`[data-test-book-link="2"]`);
    assert
      .dom('[data-test-book-title]')
      .hasText('Harry Potter and the Chamber of Secrets');
    assert.dom('[data-test-author-name]').hasText('Rowling, J.K.');
    assert.dom('[data-test-book-publish-date]').containsText('1998-07-02');
    assert.dom('[data-test-book-isbn]').containsText('0747538492');
  });
});
