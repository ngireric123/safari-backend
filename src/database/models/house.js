'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    name: DataTypes.STRING,
    amenities: DataTypes.STRING,
    isActivated: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    highlights: DataTypes.STRING,
    images: DataTypes.JSONB
  }, {});
  House.associate = function(models) {
    // associations can be defined here
  };
  return House;
};