import { View } from 'backbone.marionette'
import template from './checkout'
import CheckoutCollectionView from './CheckoutCollectionView'

export default View.extend({
  id: 'checkout',
  template: template,
  regions: {
    'orderItems': 'tbody'
  },
  onRender () {
    this.showChildView('checkout', new CheckoutCollectionView())
  }
})
