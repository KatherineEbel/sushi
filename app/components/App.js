import Mn from 'backbone.marionette'
import Bb from 'backbone'
import AppView from './AppView.js'

export default Mn.Application.extend({
  region: 'body',
  onStart (app, data) {
    Bb.history.start()
    this.showView(new AppView(data))
  }
})
