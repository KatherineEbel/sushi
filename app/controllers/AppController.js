import Mn from 'backbone.marionette'
import app from '../components/App'
Radio.DEBUG = true

export default Mn.Object.extend({
  initialize (options) {
    this.rootView = options.rootView
  },
  showHome () {
    app.showView(this.rootView)
  },
  showMenu () {
    app.getView().getChildView('main').triggerMethod('show:menu')
  },
  showMenuItem (id) {
    const menuItemView = app.getView().getChildView('main')
    const model = menuItemView.collection.get(id)
    Mn.triggerMethodOn(menuItemView, 'show:menu:item', model)
  }
})
