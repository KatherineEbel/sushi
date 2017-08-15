import Mn from 'backbone.marionette'
import MenuItemView from '../item/ItemView.js'
import Items from '../items/Items.js'
import './items.styl'
import Radio from 'backbone.radio'

const resourceChannel = Radio.channel('resourceChannel')

export default Mn.CollectionView.extend({
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
  }
})
