import { Application } from 'backbone.marionette'
import Bb from 'backbone'
import AppView from './AppView.js'
import AppRouter from '../routers/AppRouter'
import MenuItemsCollection from './main/menu/Items.js'

const App = Application.extend({
  channelName: 'uiChannel',
  region: 'body',
  radioRequests: {
    'menuItems': 'replyMenuItems'
  },
  radioEvents: {
  },
  replyMenuItems () {
    return this.menuItems
  },
  onStart () {
    this.menuItems = (new MenuItemsCollection()).fetch()
    // Radio.channel('resourceChannel').reply('menuItems', () => menuItemsDeferred)
    this.rootView = new AppView()
    this.router = new AppRouter({ rootView: this.rootView })
    Bb.history.start({ pushState: true })
  }
})

const app = new App()
export default app
