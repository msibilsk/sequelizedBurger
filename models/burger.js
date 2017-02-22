module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    // ,{
    //     // We're saying that we want our Author to have Posts
    //     classMethods: {o
    //         associate: function(mdels) {
    //             // An Author (foreignKey) is required or a Post can't be made
    //             Post.belongsTo(models.Author, {
    //                 foreignKey: {
    //                     allowNull: false
    //                 }
    //             });
    //         }
    //    }

    return Burger;
};
