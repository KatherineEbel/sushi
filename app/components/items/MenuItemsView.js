import Mn from 'backbone.marionette'
import template from 'items.pug'
import menuJSON from '../../data/menu.json'
import MenuItem from '../item/Item.js'
import Items from '../items/Items.js'

export default Mn.CollectionView.extend({
  childView: MenuItem,
  regions: '#items',
  initialize () {
    this.collection = new Items(menuJSON)
  }
})
