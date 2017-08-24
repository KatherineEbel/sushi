import { Model } from 'backbone'

export default Model.extend({
  initialize () {
    this.listenTo(Radio.channel('uiChannel'), 'item:added', (model) => {
      const price = model.get('price')
      const currentTotal = this.get('cartTotal')
      const newTotal = currentTotal + price
      this.set({ cartTotal: newTotal })
      Radio.channel('uiChannel').reply('cart:total', newTotal)
      Radio.channel('uiChannel').trigger('cart:total', newTotal)
    })
    this.listenTo(Radio.channel('uiChannel'), 'item:removed', (model) => {
      const price = model.get('price')
      const currentTotal = this.get('cartTotal')
      const newTotal = currentTotal - price
      this.set({ cartTotal: newTotal })
      Radio.channel('uiChannel').reply('cart:total', newTotal)
      Radio.channel('uiChannel').trigger('cart:total', newTotal)
    })
  }
})
