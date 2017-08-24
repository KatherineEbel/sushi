import Mn from 'backbone.marionette'
import template from './item.pug'
import Item from './Item.js'

export default Mn.View.extend({
  tagName: 'li',
  model: Item,
  template: template,
  ui: {
    header: 'header',
    addCart: '.add_cart'
  },
  triggers: {
    'click @ui.header': 'header:clicked',
    'click @ui.addCart': 'addCart:clicked'
  },
  onAddCartClicked () {
    let incremented = this.model.get('count') + 1
    this.model.set({'inCart': true, 'count': incremented})
  }
})
