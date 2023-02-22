const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

app.get('/api/bonjour/:json?', (req, res) => {
  const name = req.query.name || ''
  const message = `Bonjour 👋 ${name}`

  if (req.params.json) return res.json({ message })

  return res.send(message)
})

app.listen(port, () => {
  console.log('============================')

  console.log(`Server started ✨`)
  console.log(`local: http://localhost:${port}`)

  console.log('============================')
})

module.exports = app
