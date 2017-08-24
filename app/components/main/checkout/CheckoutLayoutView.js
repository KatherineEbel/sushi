import { View } from 'backbone.marionette'
import template from './checkout'
import CheckoutCollectionView from './CheckoutCollectionView'

export default View.extend({
  id: 'checkout',
  template: template,
  ui: {
    total: 'span.total',
    cancel: 'footer a'
  },
  regions: {
    'orderItems': {
      el: 'tbody',
      replaceElement: true
    }
  },
  triggers: {
    'click @ui.cancel': 'cancelOrder'
  },
  onRender () {
    this.showChildView('orderItems', new CheckoutCollectionView({ collection: this.collection }))
  },
  onCancelOrder () {
    Radio.channel('uiChannel').trigger('cart:empty')
  },
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'cart:total', (total) => {
      this.getUI('total').text(`$${parseFloat(total).toFixed(2)}`)
    })
  }
})
