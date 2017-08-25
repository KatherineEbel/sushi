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
  initialize (options) {
    this.model = new CartActionsModel({ cartTotal: options.cartTotal })
    this.listenTo(Radio.channel('uiChannel'), 'cart:total', (total) => this.model.set({ cartTotal: total }))
  },
  triggers: {
    'click @ui.emptyCart': 'notifyEmptyCart',
    'click @ui.checkout': 'notifyCheckout'
  },
  modelEvents: {
    'change:cartTotal': 'updateTotal'
  },
  onRender () {
    this.updateTotal()
  },
  updateTotal () {
    const total = this.getUI('total')
    total.text(`$${parseFloat(this.model.get('cartTotal')).toFixed(2)}`)
  }
})
