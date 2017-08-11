import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.js'

const isDevelopment = process.env.NODE_ENV != 'production'
const port = isDevelopment ? 3000: process.env.PORT
const app = express()

if (isDevelopment) {
  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.get('/', (req, res) => res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html'))))
} else {
  app.use(express.static(path.join(__dirname, '/public')))
  app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
}

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err)
  }

  console.info(`===> 🌎 Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
})