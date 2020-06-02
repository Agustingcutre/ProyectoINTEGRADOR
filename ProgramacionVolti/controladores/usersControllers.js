//formulario por get
// metodo para la busqueda

let db = require ('../database/models');
let op = db.sequelize.op;

let usersController = {
  searchUsers: function(req, res) {
    db.user.findAll({
      where: {
        [op.or]: {
          email: {[op.like]: "%" + req.query.searchUser + "%" },
          username: {[op.like]: "%" + req.query.searchUser + "%"},
        }
      }
    })
    .then(function(resultado){
      res.send(resultado)
    })
  }


}
