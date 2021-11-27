import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import {
  createAuthor,
  createAuthorBook,
} from 'library-ui/tests/helpers/custom-helpers';

module('Acceptance | authors', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List authors', async function (assert) {
    this.server.create('author', { first: 'Stephen', last: 'King' });
    this.server.create('author', { first: 'J.K.', last: 'Rowling' });

    await visit('/authors');
    assert.equal(currentURL(), '/authors');

    assert
      .dom('[data-test-author-link]')
      .exists({ count: 2 }, 'All author links are rendered');

    assert
      .dom('[data-test-author-list-item]:first-child')
      .hasText(
        'King, Stephen',
        'The first author list item contains the author name'
      );

    assert
      .dom('[data-test-author-list-item]:last-child')
      .hasText(
        'Rowling, J.K.',
        'The other author list item contains the author name'
      );
  });

  test('Create an author', async function (assert) {
    this.server.create('author', { first: 'Stephen', last: 'King' });

    await visit('/authors');
    await createAuthor('J.K.', 'Rowling');

    assert
      .dom('[data-test-author-link]')
      .exists({ count: 2 }, 'A new author link is rendered');

    assert
      .dom('[data-test-author-list-item]:last-child')
      .hasText('Rowling, J.K.', 'The new author is rendered as the last item');
  });

  test('Display an author', async function (assert) {
    this.server.create('author', { first: 'Stephen', last: 'King' });
    let author2 = this.server.create('author', {
      first: 'J.K.',
      last: 'Rowling',
    });

    await visit('/authors');
    assert
      .dom('[data-test-author-link]')
      .exists({ count: 2 }, 'All author links are rendered');

    await click(`[data-test-author-link="${author2.id}"]`);
    assert
      .dom('[data-test-author-full-name]')
      .hasText(
        'Rowling, J.K.',
        'Clicking the 2nd link display the name of the 2nd author'
      );
    assert
      .dom('[data-test-books-count]')
      .hasText(
        '0 books from this author',
        'A newly created author has 0 books'
      );
    assert
      .dom('[data-test-book-list-link]')
      .exists({ count: 0 }, 'A newly created author does not have any book');
  });

  test('Update an author', async function (assert) {
    this.server.create('author', { first: 'Stephen', last: 'King' });
    let author2 = this.server.create('author', {
      first: 'J.K.',
      last: 'Rowling',
    });

    await visit('/authors');
    assert
      .dom('[data-test-author-link]')
      .exists({ count: 2 }, 'All author links are rendered');

    await click(`[data-test-author-link="${author2.id}"]`);
    assert.equal(currentURL(), `/authors/${author2.id}`);

    await click('[data-test-edit-author-button]');
    assert.equal(currentURL(), `/authors/${author2.id}/edit`);

    fillIn('[data-test-edit-author-first-name]', 'Firstname');
    fillIn('[data-test-edit-author-last-name]', 'Lastname');
    await click('[data-test-save-author-button]');
    assert.equal(currentURL(), '/authors');
    assert
      .dom('[data-test-author-list-item]:last-child')
      .hasText(
        'Lastname, Firstname',
        "The author's first name and last name have been updated"
      );
  });

  test('Delete an author', async function (assert) {
    this.server.create('author', { first: 'Stephen', last: 'King' });
    let author2 = this.server.create('author', {
      first: 'J.K.',
      last: 'Rowling',
    });

    await visit('/authors');
    assert
      .dom('[data-test-author-link]')
      .exists({ count: 2 }, 'All author links are rendered');
    assert
      .dom('[data-test-author-list-item]:last-child')
      .hasText('Rowling, J.K.', 'The last author is J.K. Rowling');

    await click(`[data-test-author-link="${author2.id}"]`);
    assert.equal(currentURL(), `/authors/${author2.id}`);

    await click('[data-test-delete-author-button]');
    assert.equal(currentURL(), '/authors');
    assert
      .dom('[data-test-author-link]')
      .exists({ count: 1 }, 'One author has been deleted');
    assert
      .dom('[data-test-author-list-item]:last-child')
      .hasText('King, Stephen', 'The author J.K. Rowling has been deleted');
  });

  test('Create book from author detail page', async function (assert) {
    // Prepare data
    await visit('/authors');
    await createAuthor('Stephen', 'King');
    await visit('/books');
    await createAuthorBook(
      {
        first: 'J.K.',
        last: 'Rowling',
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        isbn: '0747538492',
        publishDate: '1998-07-02',
      }
    );

    // Authors List
    await visit('/authors');
    assert
      .dom('[data-test-author-link]')
      .exists({ count: 2 }, 'All author links are rendered');
    await click('[data-test-author-link="2"]');

    // Author Detail
    assert.equal(currentURL(), '/authors/2');
    assert
      .dom('[data-test-author-full-name]')
      .hasText(
        'Rowling, J.K.',
        'Clicking the 2nd link display the name of the 2nd author'
      );
    assert
      .dom('[data-test-books-count]')
      .hasText('1 book from this author', 'The second author has 1 book');
    assert
      .dom('[data-test-book-link]')
      .exists({ count: 1 }, "The second author's only book is rendered");
    await click('[data-test-add-author-book-button]');

    // Add New Book for Author
    assert.equal(currentURL(), `/authors/2/new-book`);
    await fillIn(
      '[data-test-book-title]',
      'Harry Porter and the Prisoner of Azkaban'
    );
    await fillIn('[data-test-book-isbn]', '0747542155');
    await fillIn('[data-test-book-publish-date]', '1999-07-08');
    await click('[data-test-submit-new-book]');

    // Author Detail
    assert
      .dom('[data-test-books-count]')
      .hasText(
        '2 books from this author',
        'The second author has another book'
      );
    assert
      .dom('[data-test-book-link]')
      .exists({ count: 2 }, "The second author's all books are rendered");
    assert
      .dom('[data-test-book-list-item]:last-child')
      .containsText(
        'Harry Porter and the Prisoner of Azkaban 0747542155',
        'The new book is rendered with correct book title and ISBN'
      );
  });
});
