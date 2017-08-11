import './app.styl'
import './index.pug'

const component = () => {
  let element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}

document.body.appendChild(component())
