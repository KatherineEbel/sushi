import Bb from 'backbone'

export default Bb.Model.extend({
  urlRoot: 'api/menuItems',
  defaults () {
    return {
      count: 0,
      price: 0.00
    }
  }
})
