"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define(
    "Bid",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contactFirstName: DataTypes.STRING,
      contactLastname: DataTypes.STRING,
      jobDescription: DataTypes.STRING,
   // dateOfOriginalBid: DataTypes. // forgot need to put this-SGar
      amountOfOriginalBid: DataTypes.INTEGER,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
     // complete: DataTypes.BOOLEAN // this completed we should maybe add in as stretch if have time-SGar
      isDeleted: DataTypes.BOOLEAN
    },
    {}
  );
  Bid.associate = function(models) {
    // associations can be defined here
  };
  return Bid;
};
