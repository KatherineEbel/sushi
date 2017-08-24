import path from 'path'
import express from 'express'
import webpack from 'webpack'
import logger from 'morgan'
import bodyParser from 'body-parser'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'
import router from './routes/all.js'

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
  app.get('/', (req, res, next) => {
    // let shouldWriteIndex = ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html'))
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.pug')))
    // shouldWriteIndex ? res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.pug'))) : next()
  })
} else {
  app.use(express.static(path.join(__dirname, '/public')))
  app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.pug'))
    // let shouldWriteIndex = ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html'))
    // shouldWriteIndex ? res.sendFile(path.join(__dirname, 'public/index.pug')) : next()
  })
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', router)

app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
})

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err)
  }

  console.info(`===> 🌎 Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
})

export default app
