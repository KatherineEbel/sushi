export default {
  data: {},
  getMenu () {
    return this.data.menuItems
  },
  init (data) {
    this.data = data
    return this
  }
}
