import express from 'express'
import {handleshorturl} from './../controller/url.js'

const router= express.Router()
router.post('/',handleshorturl)
export {router}