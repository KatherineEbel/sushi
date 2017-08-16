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
  events: {
    'click @ui.header': 'handleClick',
    'click @ui.addCart': 'addItem'
  },
  triggers: {
    'click @ui.header': 'show:details',
    'click @ui.addCart': 'cart:add'
  },
  handleClick () {
    console.log('Header clicked')
  },
  addCart () {
    console.log('Added to cart')
  }
})
