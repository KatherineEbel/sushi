import Mn from 'backbone.marionette'
import CartItemView from '../cartItem/CartItemView'
// import CartItemCollection from '../cartItem/CartItemCollection'
export default Mn.CollectionView.extend({
  tagName: 'ul',
  id: 'cartItems',
  childView: CartItemView,
  emptyView: new (Mn.View.extend({template: _.template('<div></div')}))()
})
