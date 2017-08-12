import './assets/views/index.pug'
import './assets/styles/whitespace-reset-modified.css'
import './assets/styles/main.styl'
import App from 'components/App'

document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.start()
})
