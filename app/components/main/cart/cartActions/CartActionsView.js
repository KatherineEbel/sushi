import Mn from 'backbone.marionette'
import template from './cartActions.pug'
import CartActionsModel from '../cartActions/CartActions'

export default Mn.View.extend({
  id: 'cartActions',
  tagName: 'section',
  template: template,
  ui: {
    'emptyCart': '.empty_cart',
    'checkout': '.checkout',
    'total': '.total'
  },
  triggers: {
    'click @ui.emptyCart': 'notifyEmptyCart',
    'click @ui.checkout': 'notifyCheckout'
  },
  modelEvents: {
    'change:cartTotal': 'updateTotal'
  },
  updateTotal () {
    const total = this.getUI('total')
    total.text(`$${parseFloat(this.model.get('cartTotal')).toFixed(2)}`)
  },
  initialize (options) {
    const cartTotal = options.cartTotal
    this.model = new CartActionsModel({ cartTotal: cartTotal })
  }
})
