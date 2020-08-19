module.exports = (sequelize, Datatypes) => {
  const Users = sequelize.define('Users', {
    userName: Datatypes.STRING,
    email: Datatypes.STRING,
    firstName: Datatypes.STRING,
    lastName: Datatypes.STRING,
    password: Datatypes.STRING,
    role: Datatypes.INTEGER,
    gender: Datatypes.STRING,
    logoutTime: Datatypes.DATE,
    isVerified: {
      type: Datatypes.BOOLEAN,
      defaultValue: false,
    }
  },);
  // eslint-disable-next-line func-names
  Users.associate = function (models) {
    Users.belongsTo(models.Role, {
      as: 'Role',
      foreignKey: 'role',
      targetKey: 'id',
    });
  };
  return Users;
};
