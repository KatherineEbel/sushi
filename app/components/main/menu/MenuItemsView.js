import { CollectionView } from 'backbone.marionette'
import MenuItemView from '../menuItem/ItemView'
import './items.styl'

// const resourceChannel = Radio.channel('resourceChannel')
const uiChannel = Radio.channel('uiChannel')

export default CollectionView.extend({
  id: 'items',
  tagName: 'ul',
  childView: MenuItemView,
  childViewEvents: {
    'header:clicked': 'requestDetails',
    'addCart:clicked': 'addItem'
  },
  addItem (menuItemView) {
    uiChannel.trigger('item:added', menuItemView.model)
    this.triggerMethod('add:item', menuItemView.model)
  },
  requestDetails (menuItemView) {
    this.collection.currentPage = menuItemView.model.id
    uiChannel.trigger('show:menuItem', menuItemView.model)
  }
})
