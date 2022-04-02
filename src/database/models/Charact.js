export default (sequelize, dataTypes) => {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        age: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        },
        weight: {
            type: dataTypes.DECIMAL(5,2),
            allowNull: false
        },
        story: {
            type: dataTypes.STRING(250),
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "Charact"
    };

    const Charact = sequelize.define(config.tableName, cols, config);

    Charact.associate = (models) => {

        Charact.belongsToMany(models.Movie, {
            as: "movie",
            through: "CharactMovie",
            foreignKey: "charact_id",
            otherKey: "movie_id",
            timestamps: false,
            onDelete: "cascade"
        });

    }

    return Charact;
}