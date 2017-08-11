import './app.styl'
import './index.pug'

const component = () => {
  let element = document.createElement('div')
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.innerHTML = 'Hello from app.js'
  return element
}

document.body.appendChild(component())
