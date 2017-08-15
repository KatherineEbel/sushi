import Mn from 'backbone.marionette'
import template from './item.pug'
import Item from './Item.js'

export default Mn.View.extend({
  tagName: 'li',
  model: Item,
  template: template
})
