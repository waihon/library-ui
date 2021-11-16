import { click, fillIn } from '@ember/test-helpers';

export async function createAuthor(first, last) {
  await click('[data-test-lib="new-author-button"]');
  await fillIn('[data-test-lib="new-author-first-name"]', first);
  await fillIn('[data-test-lib="new-author-last-name"]', last);
  await click('[data-test-lib="save-author-button"]');
}