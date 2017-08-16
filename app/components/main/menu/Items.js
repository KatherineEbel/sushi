import { Collection } from 'backbone'
import Item from '../menuItem/Item.js'

export default Collection.extend({
  model: Item,
  url: '/api/menuItems'
})
