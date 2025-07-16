module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }       
    });
    
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade", // If you delete a post this line will delete all the comments releated deleted post. 
        });
    };
    return Posts;
}