import Mn from 'backbone.marionette'
import template from './header.pug'
import './header.styl'

export default Mn.View.extend({
  template: template,
  ui: {
    cart: '.cart',
    count: 'span.count'
  },
  modelEvents: {
    'change:itemCount': 'render'
  },
  updateCount (model, value) {
    this.getUI('count').text(`${value} item${value === 1 ? '' : 's'}`)
  },
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'item:added', this.increment)
    this.listenTo(Radio.channel('uiChannel'), 'cart:empty', this.resetTotal)
    this.listenTo(Radio.channel('uiChannel'), 'item:removed', this.decrement)
  },
  increment () {
    this.model.set({ itemCount: this.model.get('itemCount') + 1 })
  },
  decrement () {
    let count = this.model.get('itemCount')
    if (count === 0) { return }
    this.model.set({ itemCount: this.model.get('itemCount') - 1 })
  },
  resetTotal () {
    this.model.set({ itemCount: 0 })
  }
})
