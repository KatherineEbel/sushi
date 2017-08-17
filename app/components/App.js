import { Application } from 'backbone.marionette'
import Bb from 'backbone'
import AppView from './AppView.js'
import AppRouter from '../routers/AppRouter'

export default Application.extend({
  region: 'body',
  onStart () {
    this.rootView = new AppView()
    this.router = new AppRouter({ rootView: this.rootView })
    Bb.history.start({ pushState: true })
    this.showView(this.rootView)
    this.router.navigate('menu', {trigger: false})
  }
})
