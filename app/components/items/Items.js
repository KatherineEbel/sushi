import Bb from 'backbone'
import Item from '../item/Item.js'

export default Bb.Collection.extend({
  model: Item
})
