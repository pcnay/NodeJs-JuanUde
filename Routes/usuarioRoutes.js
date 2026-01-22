import express from 'express'
import { formularioLogin,formularioRegistro } from '../Controllers/usuarioController.js'

const router = express.Router()

router.get ('/',function(req,res) {
  res.json({msg:'Hola Mundo en Express'})
})

//render = Para mostrar una vista, como ya se definio la ruta donde buscar los archivo ".pug" [ app.set('views','./Views') ]
// Los buscara directamente.
// 'Auth/Login' = Ruta donde se encuentra la vista "Login.pug"

router.get ('/Login',formularioLogin)
// Anadiendo el siguiente EndPoint (ruta)
router.get ('/Registro',formularioRegistro)

router.post('/',function (req,res) {  
  res.render('Llamado para guardar informacion POST')

})

export default router

