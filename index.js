const express = require('express')
const cors = require('cors')

// Crear el servidor de express
const app = express()

// CORS
app.use(cors())

// Directorio Público
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/iecho', require('./routes/reverseWord'))

// Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${4000}`)
})
