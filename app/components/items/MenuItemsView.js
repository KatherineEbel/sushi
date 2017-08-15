import Mn from 'backbone.marionette'
import menuJSON from '../../data/menu.json'
import MenuItemView from '../item/ItemView.js'
import Items from '../items/Items.js'
import './items.styl'

export default Mn.CollectionView.extend({
  id: 'items',
  tagName: 'ul',
  childView: MenuItemView,
  initialize () {
    this.collection = new Items(menuJSON.menuItems)
  }
})
