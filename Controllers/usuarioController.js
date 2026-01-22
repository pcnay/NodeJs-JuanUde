const formularioLogin = (req,res) => {
  res.render('Auth/Login',{
    Autenticado:true,
  })  
}

const formularioRegistro = (req,res) => {
  res.render('Auth/Registro',{

  })
}


// Se le llama a esta forma de exportar "export Nombrado" porque seran varias funciones que se exportaran desde el "Controllers Usuario"
export {
  formularioLogin,
  formularioRegistro
}