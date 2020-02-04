module.exports = (sequelize, DataTypes) => {
  
    const AuthToken = sequelize.define('AuthToken', {
      token: DataTypes.STRING
    }, {});
    
    AuthToken.associate = function(models) {
      
      AuthToken.belongsTo(models.User)
    };
    return AuthToken;
  };