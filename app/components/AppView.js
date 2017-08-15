import Mn from 'backbone.marionette'
import template from './app.pug'
import HeaderView from './header/HeaderView.js'
import './footer/footer.styl'
import MainView from './main/MainView.js'

export default Mn.View.extend({
  tagName: 'body',
  template: template,
  regions: {
    header: 'header',
    main: 'main',
    footer: 'footer'
  },
  onRender (view, data) {
    this.showChildView('header', new HeaderView())
    this.showChildView('main', new MainView())
  }
})
