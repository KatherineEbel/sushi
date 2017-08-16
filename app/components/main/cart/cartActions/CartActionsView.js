import Mn from 'backbone.marionette'
import template from './cartActions.pug'

export default Mn.View.extend({
  id: 'cartActions',
  tagName: 'section',
  template: template
})
