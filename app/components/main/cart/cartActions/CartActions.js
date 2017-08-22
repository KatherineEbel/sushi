import { Model } from 'backbone'

export default Model.extend({
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'item:added', (model) => {
      const price = model.get('price')
      const currentTotal = this.get('cartTotal')
      const newTotal = currentTotal + price
      this.set({ cartTotal: newTotal })
    })
  }
})
