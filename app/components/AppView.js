import Mn from 'backbone.marionette'
import template from './index.pug'
import HeaderView from './header/HeaderView.js'
// import MainView from './main/MainView.js'
// import FooterView from './footer/FooterView.js'

export default Mn.View.extend({
  template: template,
  regions: {
    header: 'header',
    main: 'main',
    footer: 'footer'
  },
  onRender () {
    this.showChildView('header', new HeaderView())
    // this.showChildView('main', new MainView)
    // this.showChildView('footer', new FooterView)
  }
})
