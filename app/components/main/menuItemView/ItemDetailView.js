import { View } from 'backbone.marionette'
import template from './itemView'
import Item from '../menuItem/Item.js'
import './itemDetails.styl'

export default View.extend({
  id: 'item_details',
  template: template,
  model: Item
})
