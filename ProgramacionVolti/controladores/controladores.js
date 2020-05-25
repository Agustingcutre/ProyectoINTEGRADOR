const db = require('../database/models');
let sequelize = db.sequelize;
let op = db.sequelize.Op;



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
    
    db.usuarios.create({
        nombreCompleto: req.body.nombreCompleto,
        email: req.body.email,
        passsword: req.body.password,
        fechaNacimiento: req.body.fechaNacimiento,
    });
    res.redirect("/")
    console.log(req.body)
},
    buscadorDeUsuarios : function(req,res) {
        res.render("buscadorDeUsuarios")
    },
    misResenas : function(req,res) {
        res.render("misResenas")
    }

}

module.exports = controladores;