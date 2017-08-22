import Bb from 'backbone'
// import MenuItems from '../../../collections/MenuItems'

export default Bb.Model.extend({
  urlRoot: 'api/menuItems',
  initialize () {
    this.set({inCart: false, isBeingViewed: false, count: 0})
  }
})
