import Marionette from 'backbone.marionette'
import AppView from './AppView.js'

export default Marionette.Applicaton.extend({
  region: 'body',

  onStart () {
    this.showView(new AppView())
  }
})
