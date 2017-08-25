import Bb from 'backbone'

export default Bb.Model.extend({
  defaults () {
    return {
      itemCount: 0
    }
  }
})
