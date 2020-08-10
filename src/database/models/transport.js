'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transport = sequelize.define('Transport', {
    plateNumber: DataTypes.STRING,
    images: DataTypes.JSONB
  }, {});
  Transport.associate = function(models) {
    // associations can be defined here
  };
  return Transport;
};