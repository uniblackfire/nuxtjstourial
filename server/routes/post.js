const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  return res.json({
    result: [
      { title: 'a' },
      { title: 'b' },
      { title: 'c' }
    ]
  })
})

module.exports = router;
