import { CollectionView } from 'backbone.marionette'
import CheckoutItemView from './CheckoutItemView'

export default CollectionView.extend({
  childView: CheckoutItemView
})
