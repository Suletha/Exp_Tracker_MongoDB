const Sequelize=require('sequelize');

const sequelize=new Sequelize(
    'expense',
    'root',
    'Krishna@2304',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports=sequelize;