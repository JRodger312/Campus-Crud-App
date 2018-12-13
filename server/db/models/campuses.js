const db = require('../database');
const Sequelize = require('sequelize')

const Campus = db.define('campus', {
    name: {
        type:Sequelize.STRING,
        allowNull:false,
        validate : {
            len: 1
        }
    },
    imageUrl: {
        type:Sequelize.STRING,
        defaultValue:'https://map.hood.edu/maps/UMAP_2014031260093_4_3_2.jpg'
    },
    address: {
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            len:1
        }
    },
    description : {
        type:Sequelize.TEXT
    }

})

module.exports = Campus