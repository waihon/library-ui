import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { pluralize } from 'library-ui/helpers/pluralize';

// https://guides.emberjs.com/release/testing/testing-helpers/
module('Unit | Helper | pluralize', function (hooks) {
  setupTest(hooks);

  test('pluralize 1 book', function (assert) {
    assert.strictEqual(pluralize([1, 'book']), '1 book');
  });

  test('pluralize 1 Book', function (assert) {
    assert.strictEqual(pluralize([1, 'Book']), '1 Book');
  });

  test('pluralize 1 BOOK', function (assert) {
    assert.strictEqual(pluralize([1, 'BOOK']), '1 BOOK');
  });

  test('pluralize 1 BooK', function (assert) {
    assert.strictEqual(pluralize([1, 'BooK']), '1 BooK');
  });

  test('pluralize 1 bOOk', function (assert) {
    assert.strictEqual(pluralize([1, 'bOOk']), '1 bOOk');
  });

  test('pluralize 0 book', function (assert) {
    assert.strictEqual(pluralize([0, 'book']), '0 books');
  });

  test('pluralize 2 BOOK', function (assert) {
    assert.strictEqual(pluralize([2, 'BOOK']), '2 BOOKS');
  });

  test('pluralize 3 Book', function (assert) {
    assert.strictEqual(pluralize([3, 'BOOK']), '3 BOOKS');
  });

  test('pluralize 4 BooK', function (assert) {
    assert.strictEqual(pluralize([4, 'BooK']), '4 BooKs');
  });

  test('pluralize 5 bOOk', function (assert) {
    assert.strictEqual(pluralize([5, 'bOOk']), '5 bOOks');
  });

  test('pluralize 1 appendix', function (assert) {
    assert.strictEqual(pluralize([1, 'appendix']), '1 appendix');
  });

  test('pluralize 1 Appendix', function (assert) {
    assert.strictEqual(pluralize([1, 'Appendix']), '1 Appendix');
  });

  test('pluralize 1 APPENDIX', function (assert) {
    assert.strictEqual(pluralize([1, 'APPENDIX']), '1 APPENDIX');
  });

  test('pluralize 1 AppendiX', function (assert) {
    assert.strictEqual(pluralize([1, 'AppendiX']), '1 AppendiX');
  });

  test('pluralize 1 aPPENDIx', function (assert) {
    assert.strictEqual(pluralize([1, 'aPPENDIx']), '1 aPPENDIx');
  });

  test('pluralize 0 appendix', function (assert) {
    assert.strictEqual(pluralize([0, 'appendix']), '0 appendices');
  });

  test('pluralize 2 APPENDIX', function (assert) {
    assert.strictEqual(pluralize([2, 'APPENDIX']), '2 APPENDICES');
  });

  test('pluralize 3 Appendix', function (assert) {
    assert.strictEqual(pluralize([3, 'Appendix']), '3 Appendices');
  });

  test('pluralize 4 AppendiX', function (assert) {
    assert.strictEqual(pluralize([4, 'AppendiX']), '4 Appendices');
  });

  test('pluralize 5 aPPENDIx', function (assert) {
    assert.strictEqual(pluralize([5, 'aPPENDIx']), '5 appendices');
  });

  test('pluralize 6 appendix appendixes', function (assert) {
    assert.strictEqual(
      pluralize([6, 'appendix', 'appendixes']),
      '6 appendixes'
    );
  });

  test('pluralize 7 appendix Appendixes', function (assert) {
    assert.strictEqual(
      pluralize([7, 'appendix', 'Appendixes']),
      '7 Appendixes'
    );
  });

  test('pluralize 8 appendix APPENDIXES', function (assert) {
    assert.strictEqual(
      pluralize([8, 'appendix', 'APPENDIXES']),
      '8 APPENDIXES'
    );
  });

  test('pluralize 9 appendix aPpEnDiXeS', function (assert) {
    assert.strictEqual(
      pluralize([9, 'appendix', 'aPpEnDiXeS']),
      '9 aPpEnDiXeS'
    );
  });
});
