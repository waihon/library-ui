import { click, fillIn } from '@ember/test-helpers';

export async function createAuthorBook(author, book) {
  await click('[data-test-new-book-button]');
  // Book Form
  await fillIn('[data-test-book-title]', book.title);
  await fillIn('[data-test-book-isbn]', book.isbn);
  await fillIn('[data-test-book-publish-date]', book.publishDate);
  await click('[data-test-new-author-modal-button]');
  // New Author Modal
  await fillIn('[data-test-author-first-name]', author.first);
  await fillIn('[data-test-author-last-name]', author.last);
  await click('[data-test-submit-new-author-modal-button]');
  // Book Form
  await click('[data-test-submit-changes-button]');
}

export async function createAuthor(first, last) {
  await click('[data-test-new-author-button]');
  await fillIn('[data-test-new-author-first-name]', first);
  await fillIn('[data-test-new-author-last-name]', last);
  await click('[data-test-save-author-button]');
}
