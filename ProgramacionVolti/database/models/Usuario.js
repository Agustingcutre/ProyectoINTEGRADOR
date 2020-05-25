module.exports = function(sequelize, dataTypes) {
    let alias = "usuarios";
    
    let cols = {
    
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        nombreCompleto: { 
            type: dataTypes.STRING
    
        },
        email: {
            type: dataTypes.STRING
    
        },
        password: {
            type: dataTypes.STRING
    
        },
        fechaNacimiento: {
            type: dataTypes.DATE
    
        },
        fechaDeCreacion: {
            type: dataTypes.DATE
    
        },
    }
    
    let config = {
        tableName: "usuarios",
        timestamps: false,
    }
    
    let usuarios = sequelize.define(alias,cols,config);
    
    return usuarios;
    }
