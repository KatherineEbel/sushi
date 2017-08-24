import Bb from 'backbone'

export default Bb.Model.extend({
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'item:added', this.increment)
    this.listenTo(Radio.channel('uiChannel'), 'cart:empty', this.resetTotal)
    this.listenTo(Radio.channel('uiChannel'), 'item:removed', this.decrement)
  },
  increment () {
    this.set({ itemCount: this.get('itemCount') + 1 })
  },
  decrement () {
    let count = this.get('itemCount')
    if (count === 0) { return }
    this.set({ itemCount: this.get('itemCount') + 1 })
  },
  resetTotal () {
    this.set({ itemCount: 0 })
  }
})
