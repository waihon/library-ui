import { click, fillIn } from '@ember/test-helpers';

export async function createAuthor(first, last) {
  await click('[data-test-new-author-button]');
  await fillIn('[data-test-new-author-first-name]', first);
  await fillIn('[data-test-new-author-last-name]', last);
  await click('[data-test-save-author-button]');
}