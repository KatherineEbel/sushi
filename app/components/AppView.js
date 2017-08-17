import { View } from 'backbone.marionette'
import template from './app.pug'
import HeaderView from './header/HeaderView'
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
    this.showChildView('header', new HeaderView())
    this.showChildView('main', new MainView())
  }
})
