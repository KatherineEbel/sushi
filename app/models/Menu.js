import { Model } from 'backbone'
import MenuItems from '../collections/MenuItems'

const Menu = Model.extend({
  this.selections = new MenuItems()
  this.selections.url = '/api/menuItems'
})
