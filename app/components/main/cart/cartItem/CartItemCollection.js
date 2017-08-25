import Bb from 'backbone'
import MenuItem from '../../menuItem/Item.js'
import CartItem from './CartItem'

export default Bb.Collection.extend({
  model: MenuItem
})
