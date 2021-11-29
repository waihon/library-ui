import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// https://guides.emberjs.com/release/testing/testing-helpers/
module('Integration | Helper | pluralize', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders pluralize 1 apple', async function (assert) {
    this.set('count', 1);
    this.set('singular', 'apple');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '1 apple');
  });

  test('it renders pluralize 0 aPPle', async function (assert) {
    this.set('count', 0);
    this.set('singular', 'aPPLe');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '0 aPPLes');
  });

  test('it renders pluralize 2 Apple', async function (assert) {
    this.set('count', 2);
    this.set('singular', 'Apple');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '2 Apples');
  });

  test('it renders pluralize 3 APPLE', async function (assert) {
    this.set('count', 3);
    this.set('singular', 'APPLE');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '3 APPLES');
  });

  test('it renders pluralize 1 curriculum', async function (assert) {
    this.set('count', 1);
    this.set('singular', 'curriculum');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '1 curriculum');
  });

  test('it renders pluralize 0 cuRRICUlum', async function (assert) {
    this.set('count', 0);
    this.set('singular', 'cuRRICUlum');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '0 curricula');
  });

  test('it renders pluralize 2 Curriculum', async function (assert) {
    this.set('count', 2);
    this.set('singular', 'Curriculum');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '2 Curricula');
  });

  test('it renders pluralize 3 CURRICULUM', async function (assert) {
    this.set('count', 3);
    this.set('singular', 'CURRICULUM');

    await render(hbs`{{pluralize count singular}}`);

    assert.strictEqual(this.element.textContent.trim(), '3 CURRICULA');
  });

  test('it renders pluralize 1 formula formulas', async function (assert) {
    this.set('count', 1);
    this.set('singular', 'formula');
    this.set('plural', 'FORMULAS');

    await render(hbs`{{pluralize count singular plural}}`);

    assert.strictEqual(this.element.textContent.trim(), '1 formula');
  });

  test('it renders pluralize 2 formula FORMULAS', async function (assert) {
    this.set('count', 2);
    this.set('singular', 'formula');
    this.set('plural', 'FORMULAS');

    await render(hbs`{{pluralize count singular plural}}`);

    assert.strictEqual(this.element.textContent.trim(), '2 FORMULAS');
  });
});
