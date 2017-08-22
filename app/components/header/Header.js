import Bb from 'backbone'

export default Bb.Model.extend({
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'item:added', this.updateTotal)
    this.listenTo(Radio.channel('uiChannel'), 'cart:empty', this.resetTotal)
    Radio.channel('uiChannel').trigger('cart:empty')
  },
  updateTotal () {
    this.set({ itemCount: this.get('itemCount') + 1 })
  },
  resetTotal () {
    this.set({ itemCount: 0 })
  }
})
