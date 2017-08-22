import Bb from 'backbone'

export default Bb.Model.extend({
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'item:added', this.updateTotal)
  },
  updateTotal () {
    this.set({ itemCount: this.get('itemCount') + 1 })
    console.log(this.get('itemCount'))
  }
})
