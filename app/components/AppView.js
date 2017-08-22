import { View } from 'backbone.marionette'
import template from './app.pug'
import HeaderView from './header/HeaderView'
import Header from './header/Header.js'
import './footer/footer.styl'
import MainView from './main/base/MainView'

export default View.extend({
  tagName: 'body',
  template: template,
  regions: {
    header: 'header',
    main: 'main',
    footer: 'footer'
  },
  onRender () {
    this.triggerMethod('showMainView')
    this.triggerMethod('showHeaderView')
  },
  onShowMainView () {
    this.showChildView('main', new MainView())
  },
  onShowHeaderView () {
    if (!this.getRegion('header').hasView()) {
      const headerModel = new Header({ itemCount: 0 })
      this.showChildView('header', new HeaderView({ model: headerModel }))
    }
  }
})
