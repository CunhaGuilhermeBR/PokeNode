const express = require('express')
const router = express.Router()
const actions = require('../methods/actions')

router.get('/', (req, res) => {
    res.render('page')
})

router.post('/searchPoke', actions.searchPoke)

module.exports = router