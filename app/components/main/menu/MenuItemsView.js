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
    'addCart:clicked': 'itemSelected'
  },
  requestDetails (menuItemView) {
    this.collection.currentPage = menuItemView.model.id
    console.log('Request details')
    uiChannel.trigger('show:menuItem', menuItemView.model)
  },
  itemSelected (menuItemView) {
    uiChannel.trigger('item:added', menuItemView.model)
  }
})
