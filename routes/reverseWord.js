/*
    Rutas de / revereseWord
    host + /iecho
*/

const { Router } = require('express')

const router = Router()

const { reverseWord } = require('../controllers/reverseWord')

router.get(
  '/',
  reverseWord
)

module.exports = router
