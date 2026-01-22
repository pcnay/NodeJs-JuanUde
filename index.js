// console.log('Hola Mundo de NodeJs')
//const express = require ('express') // CommonJS
import express from 'express'
import usuarioRoutes from './Routes/usuarioRoutes.js'

//Crear la app
const app = express()

// Habilitar "Pug"
// set = Para asignar configuraciones
app.set('view engine','pug')

// Se define la carpeta donde se guardan los archvios de "pug"
app.set('views','./Views')

//Esta carpeta se crea en el directorio raiz.
// Definiendo las carpetas publicas, contienen acceso las personas que visitaran el sitio Web, y ademas donde estan los archivos CSS, imagenes, Javascript es decir carchivos estaticos
app.use(express.static('Public'))


// Routing
// Cuando en el navegador se teclea "/", tiene asociada las rutas que se encuentran en el archivo "usuarioRoutes" que se importo.
//app.get = Muetra rutas exactas.
//app.use = Con solo que inicie con "/" el resto no afecta.
app.use('/',usuarioRoutes)
app.use ('/Auth',usuarioRoutes)



// Definir un puerto y arrancar el proyecto.
const port = 3033 // Este puerto esta configurado para el dominio : https://api.my-empresa.com

app.listen(port,() => {
  console.log(`El servidor esta funcionando en el puerto ${port}`)

})
