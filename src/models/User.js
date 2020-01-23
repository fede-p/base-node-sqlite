
const { DataTypes } = require('sequelize');
let User = ""

User =  {
    createTable:async (db) => {
        User = db.define('User', {
            // Model attributes are defined here
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING
                // allowNull defaults to true
            }
        }, {
            // Other model options go here
        });
        await db.sync({ force: false })
    },
    create:async (obj) => {
        let user = User.build(obj)
        await user.save()
    },
    findAll: async () => {
        return await User.findAll()
    }
}

module.exports = User






