module.exports = function(sequelize, dataTypes) {
    let alias = "usuarios";
    
    let cols = {
    
    
        nombreCompleto: { 
            type: dataTypes.STRING,
    
        },
        email: {
            type: dataTypes.STRING,
    
        },
        password: {
            type: dataTypes.STRING,
    
        },
        fechaNacimiento: {
            type: dataTypes.DATE,
    
        },
        
    }
    
    let config = {
        tableName: "usuarios",
        timestamps: false,
    }
    
    let usuarios = sequelize.define(alias,cols,config);

   usuarios.associate = function(models) {
        usuarios.hasMany(models.resenas, {
            as:"resenas",
            foreignKey: "usuarioID",
        });
    }
    
    return usuarios;
    }
