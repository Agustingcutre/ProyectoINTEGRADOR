const db = require('../database/models');
let sequelize = db.sequelize;
let op = db.sequelize.Op;
let moduloLogin = require('../modulo-login');
let bcrypt = require("../node_modules/bcryptjs");



const controladores = {

  
    listaGeneros : function (req,res) {
        res.render('listaGeneros')
    },
    favoritos : function (req,res) {
        res.render('favs')
    },
    buscadorAvanzado : function (req,res) {
        res.render('buscadorAvanzado')
    },
    detalleSerie : function (req,res) {
        res.render('detalleSerie')
    },
    buscador : function (req,res) {
        res.render('buscador')
    },
    registrarse : function (req,res) {
        res.render('registrarse')
    },
registrarUsuario : function(req,res) {
    let passEncriptada = bcrypt.hashSync(req.body.password, 10);
    
    db.usuarios.create({
        nombreCompleto: req.body.nombreCompleto,
        email: req.body.email,
        password: passEncriptada,
        fechaNacimiento: req.body.fechaNacimiento,
    });
    res.redirect("/")
},
    buscadorDeUsuarios : function(req,res) {
        res.render("buscadorDeUsuarios")
    },
    crearResena : function(req,res) {
        db.resenas.create({
            resena: req.body.resena,
            puntaje: req.body.puntaje,
        })
    },
    misResenas : function(req,res) {
        res.render("misResenas")
    },
    login : function(req,res) {
        res.render("login")
    },
    usuarioLogin : function(req,res) {
      moduloLogin.validar(req.body.email, req.body.password)
      .then(resultados=>{
          if(compareSync( req.body.password,resultados.password)){
            db.Resena.findAll({
                where: [
                    {id : UsuarioID}
                ]
            })
            .then(resultados => {
                res.render("misResenas")

            })

          //  buscar TODAS las reseñas DNDE el id del usuario sea igual al que te trajiste en resultados
          //despues de la consulta tenes otro then donde vas a definir que renderizas y que datos le envias a esta vista
              //return resenas;
            res.render("misResenas")
        }
        else {
            return false
        }
      
        
    
    })
    

}
}

module.exports = controladores;