/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bidstables', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    contactFirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    contactLastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    jobDescription: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    dateOfOriginalBid: {
      type: DataTypes.DATE,
      allowNull: false
    },
    amountOfOriginalBid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    isDeleted: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'bidstables'
  });
};
