import _ from 'lodash'

export default {
  data: {},
  getMenu () {
    return this.data.menuItems
  },
  init (data) {
    this.data = data
    return this
  },
  getMenuItem (id) {
    let menuItems = data.menuItems || []
    return _.find(menuItems, item => item.id = id)
  }
}
