module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        movie_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "MovieGenre"
    };

    const MovieGenre = sequelize.define(config.tableName, cols, config);

    return MovieGenre;
}