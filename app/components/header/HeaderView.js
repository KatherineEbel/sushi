import Mn from 'backbone.marionette'
import template from './header.pug'
import './header.styl'

export default Mn.View.extend({
  template: template,
  ui: {
    cart: '.cart'
  },
  modelEvents: {
    'change:itemCount': 'render'
  }
})
