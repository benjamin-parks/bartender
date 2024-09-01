const User = require('./User');
const Favorite = require('./Favorite');
const Drink = require('./Drink');
const Comment = require('./Comment');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreignKey: 'user_id'
});

Drink.hasMany(Favorite, {
    foreignKey: 'drink_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Drink, {
    foreignKey: 'drink_id'
});

module.exports = { User, Favorite, Drink, Comment };