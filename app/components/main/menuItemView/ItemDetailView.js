import { View } from 'backbone.marionette'
import template from './itemView'
import Item from '../menuItem/Item.js'
import './itemDetails.styl'

export default View.extend({
  id: 'item_details',
  template: template,
  model: Item,
  ui: {
    prev: '.nav.prev',
    next: '.nav.next',
    addCart: 'a.add_cart',
    close: 'a.close'
  },
  events: {
    'click @ui.addCart': 'addItem'
  },
  triggers: {
    'click @ui.prev': 'getPrev:id',
    'click @ui.next': 'getNext:id',
    'click @ui.close': 'goBack'
  },
  addItem () {
    this.triggerMethod('add:item', this.model)
    this.model.set({ count: this.model.get('count') + 1 })
    Radio.channel('uiChannel').trigger('item:added', this.model)
  }
})
