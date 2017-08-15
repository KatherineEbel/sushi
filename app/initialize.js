import './components/index.pug'
import './assets/styles/main.styl'
import App from 'components/App'
import MenuItemsCollection from 'components/items/Items.js'
import Radio from 'backbone.radio'
Radio.DEBUG = true
const resourceChannel = Radio.channel('resourceChannel')

document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  const menuItemsDeferred = (new MenuItemsCollection()).fetch()
  resourceChannel.reply('menuItems', () => menuItemsDeferred)
  app.start()
})
