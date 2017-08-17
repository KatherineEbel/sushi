import { CollectionView } from 'backbone.marionette'
import MenuItemView from '../menuItem/ItemView'
import Items from './Items.js'
import './items.styl'
import Radio from 'backbone.radio'

const resourceChannel = Radio.channel('resourceChannel')
const uiChannel = Radio.channel('uiChannel')

export default CollectionView.extend({
  id: 'items',
  tagName: 'ul',
  childView: MenuItemView,
  initialize () {
    this.collection = new Items()
    let menuDataDeferred = resourceChannel.request('menuItems')
    menuDataDeferred.done(this.resetCollection.bind(this))
  },
  resetCollection (collection) {
    this.collection.reset(collection)
  },
  childViewEvents: {
    'show:details': 'requestDetails',
    'cart:add': 'itemSelected'
  },
  requestDetails (menuItemView) {
    uiChannel.trigger('show:menuItem', JSON.stringify(menuItemView.model))
  },
  itemSelected (menuItemView) {
    console.log(`Item added: ${menuItemView.model.get('id')}`)
  }
})
