import Bb from 'backbone'
import CartItem from './CartItem'

export default Bb.Collection.extend({
  model: CartItem
})
