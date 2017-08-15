import fs from 'fs'
import path from 'path'
import express from 'express'
import menuApi from '../api/JSON-crud'
import menuJSON from '../../app/data/menu.json'
import _ from 'lodash'

const router = express.Router()
const routeFiles = ['menuItems']

const api = Object.create(menuApi).init(menuJSON)

_.forEach(routeFiles, (file) => {
  require(path.resolve(path.dirname(__dirname), `routes/${file}`)).default(router, api)
})

export default router
