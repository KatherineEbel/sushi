// CollectionPager model
import { Collection } from 'backbone'
// import Mn from 'backbone.marionette'

export default Collection.extend({
  initialize () {
    this.numPages = this.length
    this.currentPage = 1
    this.pageNext = () => {
      this.currentPage = this.currentPage === this.numPages ? 1 : ++this.currentPage
      return this.currentPage
    }
    this.pagePrev = () => {
      this.currentPage = this.currentPage === 1 ? this.numPages : --this.currentPage
      return this.currentPage
    }
    this.setCurrentPage = (num) => {
      this.currentPage = num
      return this.currentPage
    }
  }
})
