export default (sequelize, dataTypes) => {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        title: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(2,1),
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "Movie"
    };

    const Movie = sequelize.define(config.tableName, cols, config);

    Movie.associate = (models) => {

        Movie.belongsToMany(models.Charact, {
            as: "charact",
            through: "CharactMovie",
            foreignKey: "movie_id",
            otherKey: "charact_id",
            timestamps: false,
            onDelete: "cascade"
        });

        Movie.belongsToMany(models.Genre, {
            as: "genre",
            through: "MovieGenre",
            foreignKey: "movie_id",
            otherKey: "genre_id",
            timestamps: false,
            onDelete: "cascade"
        });

    }

    return Movie;
}