// CollectionPager model
import { Model, Collection } from 'backbone'

export default Model.extend({
  defaults: {
    currentPage: 1,
    collection: new Collection(),
    numPages: this.collection.length
  },
  pageNext () {
    this.currentPage = this.currentPage === this.numPages ? 1 : ++this.currentPage
  },
  pagePrev () {
    this.currentPage = this.currentPage === 1 ? this.numPages : --this.currentPage
  },
  setCurrentPage (num) {
    this.currentPage = num
  }
})
