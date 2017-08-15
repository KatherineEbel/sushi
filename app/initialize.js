import './components/index.pug'
import './assets/styles/main.styl'
import App from 'components/App'

document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  $.getJSON('/api/menuItems')
    .done(data => {
      app.start()
    })
})
