import Mn from 'backbone.marionette'
import Item from '../components/main/menuItem/Item.js'
import app from '../components/App'
Radio.DEBUG = true

// const resourceChannel = Radio.channel('resourceChannel')
// const uiChannel = Radio.channel('uiChannel')

export default Mn.Object.extend({
  initialize (options) {
    this.rootView = options.rootView
    // this.app = options.app
    // this.listenTo(uiChannel, 'show:menuItem', this.showMenuItem)
  },
  showHome () {
    console.log('Home route triggered')
    app.showView(this.rootView)
  },
  showMenu () {
    console.log('Menu Route triggered')
    app.getView().triggerMethod('showMainView')
  },
  showMenuItem (id) {
    let menuItem = new Item({id: id}).fetch().done((model) => {
      app.getView().getChildView('main').triggerMethod('showMenuItem', model)
      console.log('show menuItem: ' + model)
    })
    console.log(menuItem)
  },
  showCheckout () {

  }
})
