const express = require('express')
const next = require('next')
const TelecomBundles = require('./api/TelecomBundles')

const port = parseInt(process.env.PORT, 10) || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  

  server.use('/api/list-all-broadband', (req, res) => {
    return res.send(TelecomBundles('bb'))
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
