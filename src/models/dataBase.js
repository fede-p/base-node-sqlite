
const {CONFIG} = require('../../config/')
const { Sequelize, DataTypes } = require('sequelize');
const User = require('./User')

reConect = () => {
    console.log("ss")
    dataBase.conect()
}

dataBase =  {
    conect: async () => {
        var db = new Sequelize('dataBase', 'username','password', {
                host: 'localhost',
                dialect: 'sqlite',
                storage: 'dataBase.sqlite'}
            )
        try {
            await db.authenticate()
        } catch (error) {
            setTimeout(reConect , 1000)
        }

        User.createTable(db)

        //console.log(db.models.User);
    },
}


module.exports = dataBase