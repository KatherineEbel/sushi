import PageableCollection from './PageableCollection.js'
import Item from '../components/main/menuItem/Item'

export default PageableCollection.extend({
  model: Item,
  url: '/api/menuItems'
})
