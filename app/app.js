import './assets/styles/whitespace-reset-modified.css'
import './assets/styles/main.css'
import './assets/views/index.html'

const component = () => {
  let element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}

document.body.appendChild(component())
