module.exports = (sequelize, dataTypes) => {
  const RefreshToken = sequelize.define(
    "RefreshToken",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      token: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },

      createdAt: {
        field: "created_at",
        type: dataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: dataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "refresh_token",
      timeStamps: true,
    }
  );
  return RefreshToken;
};
