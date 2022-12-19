const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    date_akk: {type: DataTypes.STRING},
    inf_stud: {type: DataTypes.JSON},
    img: {type: DataTypes.STRING},
    group: {type: DataTypes.JSON},
    tittle: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER}

})

const Contests = sequelize.define('contests', {

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    date_cont: {type: DataTypes.STRING},
    winners: {type: DataTypes.JSON},
    admins: {type: DataTypes.JSON},
    photo: {type: DataTypes.JSON},
    users: {type: DataTypes.STRING},
    date_start_reg: {type: DataTypes.STRING},
    date_stop_reg: {type: DataTypes.STRING},
    yes_no: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING},
    type_cont: {type: DataTypes.STRING}
    
})


module.exports = {
    User,
    Contests

}





