import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | review-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const author = {
      first: 'J.K.',
      last: 'Rowling',
    };
    this.book = {
      title: "Harry Potter and the Philosopher's Stone",
      isbn: '0747532699',
      publishDate: '1997-06-26',
      author,
    };
    this.review = {
      user: 'First Last',
      body: 'I thought that the book was amazing.',
      book: this.book,
    };
    this.obSubmit = () => {};

    await render(hbs`
      <ReviewForm
        @review={{this.review}}
        @book={{this.book}}
        @onSubmit={{this.onSubmit}}
      />
    `);

    assert.ok(true);
  });
});
