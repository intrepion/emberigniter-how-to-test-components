import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wine-stock', 'Integration | Component | wine stock', {
  integration: true
});

test('it renders empty', function(assert) {
  assert.expect(1);

  this.render(hbs`{{wine-stock}}`);

  // check title is correct

  assert.equal(this.$('h1').text(), 'Wine Stock');

});
