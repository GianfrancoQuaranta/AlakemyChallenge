export default (sequelize, dataTypes) => {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "Genre"
    };

    const Genre = sequelize.define(config.tableName, cols, config);

    Genre.associate = (models) => {

        Genre.belongsToMany(models.Movie, {
            as: "movie",
            through: "MovieGenre",
            foreignKey: "genre_id",
            otherKey: "movie_id",
            timestamps: false,
            onDelete: "cascade"
        });

    }

    return Genre;

}