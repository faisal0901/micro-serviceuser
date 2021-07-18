module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      profesion: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      avatar: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: dataTypes.ENUM,
        values: ["admin", "student"],
        allowNull: false,
        defaultValue: "student",
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
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
      tableName: "users",
      timeStamps: true,
    }
  );
  return User;
};
