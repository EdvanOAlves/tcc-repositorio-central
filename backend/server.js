const express = require('express')
const cors = require('cors')
const swaggerUi = require("swagger-ui-express")
const YAML = require("yamljs")

const app = express()
const PORT = process.PORT || 8080
const swaggerDocument = YAML.load("./swagger.yaml")

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}

app.use(express.json())
app.use(cors(corsOptions))
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => {
  console.log(`Aguardando requisições na porta: ${PORT}`)
  console.log("Swagger em http://localhost:8080/api/docs")
})
