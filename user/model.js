const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define(
    'user',
    {
        username: {
            type: Sequelize.STRING,
            field: 'user_username',
            allowNull: false
        },
        score: {
            type: Sequelize.INTEGER,
            field: 'user_score'
        }
    }, {
        timestamps: false,
        tableName: 'users'
    }
)
module.exports = User;