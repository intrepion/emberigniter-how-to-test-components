import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import makeWineObjects from '../../helpers/make-wine-objects';

moduleForComponent('wine-stock', 'Integration | Component | wine stock', {
  integration: true
});

test('it renders empty', function(assert) {
  assert.expect(1);

  this.render(hbs`{{wine-stock}}`);

  // check title is correct

  assert.equal(this.$('h1').text(), 'Wine Stock');

});

test('it renders wines in dropdown and list', function(assert) {
  assert.expect(5);

  const model = makeWineObjects(12);

  this.set('model', model);
  this.render(hbs`{{wine-stock wines=model}}`);

  // check wines are included in dropdown

  const $dropdown = this.$('.dropdown');

  assert.equal($dropdown.find('option:eq(0)').text(), model[0].toString());
  assert.equal($dropdown.find('option:eq(1)').text(), model[1].toString());

  // check all wines are listed

  const $list = this.$('.wines');

  assert.equal($list.find('.wine:eq(0)').text(), model[0].toString());
  assert.equal($list.find('.wine:eq(8)').text(), model[8].toString());
  assert.ok($list.find('.wine').length);

});
