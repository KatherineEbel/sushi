import Mn from 'backbone.marionette'
import CartItemView from '../cartItem/CartItemView'
import CartItemCollection from '../cartItem/CartItemCollection'
export default Mn.CollectionView.extend({
  tagName: 'ul',
  id: 'cartItems',
  childView: CartItemView,
  initialize () {
    let cartItem = {
      'id': 1,
      'name': 'Sashimi salad',
      'image': 'sashimi-salad.jpg',
      'price': 12.00,
      'description': 'Organic greens topped with fresh sashimi, wasabi soy vinaigrette.',
      'nutritionalInformation': {
        'protein': 2.9156,
        'fat': 2.4396,
        'carbohydrate': 3.8071,
        'energyKj': 17.5775,
        'energyKcal': 4.2011,
        'sugar': 0.3738
      }
    }
    this.collection = new CartItemCollection(cartItem)
  }
})
