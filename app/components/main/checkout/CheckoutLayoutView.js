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
  modelEvents: {
    'change:cartTotal': 'updateTotal'
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
  updateTotal (model) {
    this.getUI('total').text(`$${parseFloat(model.get('cartTotal')).toFixed(2)}`)
  },
  incrementTotal (price) {
    this.model.set({ cartTotal: this.model.get('cartTotal') + price })
  },
  decrementTotal (price) {
    this.model.set({ cartTotal: this.model.get('cartTotal') - price })
  },
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'item:added', this.incrementTotal)
    this.listenTo(Radio.channel('uiChannel'), 'item:removed', this.decrementTotal)
  }
})
