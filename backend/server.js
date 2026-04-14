const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.PORT || 8080

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}

app.use(express.json())
app.use(cors(corsOptions))

app.get('/api/v1/usuario', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

app.listen(PORT, () => {
  console.log(`Aguardando requisições na porta: ${PORT}`)
})
