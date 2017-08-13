import Mn from 'backbone.marionette'
import template from 'cart.pug'
import * from 'cart.styl'

export default Mn.View.extend({
  template: template,
  regions: {
    cartItems: '#cartItems',
    cartActions: '#cartActions'
  }
})
