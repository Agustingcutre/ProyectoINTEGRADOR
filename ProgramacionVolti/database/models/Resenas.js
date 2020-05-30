module.exports = function(sequelize, dataTypes) {
let alias = "resenas";

let cols = {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    peliculaID: { 
        type: dataTypes.INTEGER

    },
    usuarioID: {
        type: dataTypes.INTEGER

    },
   resena: {
        type: dataTypes.STRING

    },
    fechaDeCreacion: {
        type: dataTypes.DATE

    },
    fechaDeActualizacion: {
        type: dataTypes.DATE

    },
   puntaje: {
        type: dataTypes.INTEGER

    },
}

let config = {
    tableName: "resenas",
    timestamps: false,
}

let resenas = sequelize.define(alias,cols,config);

resenas.associate = function(models) {
    resenas.belongsTo(models.usuarios, {
        as:"usuario",
        foreignKey: "usuarioID",
    });
}

return resenas;
}