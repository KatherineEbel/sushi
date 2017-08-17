import Mn from 'backbone.marionette'
// import Bb from 'backbone'
import Radio from 'backbone.radio'
import MenuItemsCollection from '../components/main/menu/Items'
Radio.DEBUG = true

const resourceChannel = Radio.channel('resourceChannel')
const uiChannel = Radio.channel('uiChannel')

export default Mn.Object.extend({
  initialize (options) {
    this.rootView = options.rootView
    this.listenTo(uiChannel, 'show:menuItem', this.showMenuItem)
  },
  showLayout () {
    this.showMenu()
  },
  showMenu () {
    const menuItemsDeferred = (new MenuItemsCollection()).fetch()
    resourceChannel.reply('menuItems', () => menuItemsDeferred)
    this.rootView.render()
  },
  showMenuItem (item) {
    console.log('show menuItem: ' + item)
  },
  showCheckout () {

  }
})
