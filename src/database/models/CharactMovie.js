module.exports = function (sequelize, dataTypes){
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        charact_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        movie_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "CharactMovie"
    };

    const CharactMovie = sequelize.define(config.tableName, cols, config);

    return CharactMovie;
}