const db = require('../database');
const Sequelize = require('sequelize')

const Student = db.define('student', {
    firstName : {
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            len:1
        }
    },
    lastName : {
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            len:1
        }
    },
    email : {
        type: Sequelize.STRING,
        allowNull:false,
        validate : {
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/285/square_thumb%402x.jpg'
    },
    gpa : {
        type: Sequelize.DECIMAL,
        validate: {
            min:0.0,
            max:4.0
        }
    }
})

module.exports = Student