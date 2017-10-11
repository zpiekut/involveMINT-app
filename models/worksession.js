'use strict';
module.exports = function(sequelize, DataTypes) {
  var WorkSession = sequelize.define('WorkSession', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    createdAt: DataTypes.DATE,
    endedAt: DataTypes.DATE,
    approved: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return WorkSession;
};
