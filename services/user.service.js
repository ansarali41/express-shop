const UserModel = require('../models/User.model');

module.exports.createUser = (userInfo) => {
    return UserModel.create(userInfo); // here "create" is mongoose create
};
module.exports.findUserByEmail = (email) => {
    return UserModel.findOne({ email: email });
};
