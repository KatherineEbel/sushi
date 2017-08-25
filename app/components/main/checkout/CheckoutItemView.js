import { View } from 'backbone.marionette'
import template from './orderItem.pug'
import Item from '../menuItem/Item'

export default View.extend({
  tagName: 'tr',
  template: template,
  model: Item,
  ui: {
    'plus': '.fa-plus',
    'minus': '.fa-minus',
    'count': 'p'
  },
  events: {
    'click @ui.plus': function () {
      this.model.set({ count: this.model.get('count') + 1 })
      Radio.channel('uiChannel').trigger('item:added', this.model.get('price'))
    },
    'click @ui.minus': function () {
      let count = this.model.get('count')
      this.model.set({ count: count > 0 ? count - 1 : 0 })
      Radio.channel('uiChannel').trigger('item:removed', this.model.get('price'))
    }
  },
  modelEvents: {
    'change:count': 'updateCount'
  },
  updateCount () {
    let count = this.model.get('count')
    if (count === 0) {
      this.destroy()
      return
    }
    this.getUI('count').text(this.model.get('count'))
  }
})
