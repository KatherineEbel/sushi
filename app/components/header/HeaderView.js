import Mn from 'backbone.marionette'
import template from './header.pug'
import './header.styl'

export default Mn.View.extend({
  template: template,
  ui: {
    cart: '.cart',
    count: 'span.count'
  },
  modelEvents: {
    'change:itemCount': 'render'
  },
  updateCount (model, value) {
    this.getUI('count').text(`${value} item${value === 1 ? '' : 's'}`)
  }
})
