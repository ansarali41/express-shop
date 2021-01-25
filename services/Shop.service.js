const Shop = require('../models/Shop.model');

// create or post
module.exports.create = (shopData) => {
    return Shop.create(shopData);
};
// get all data
module.exports.findAll = () => {
    return Shop.find({});
};
// get one
module.exports.findOne = (id) => {
    return Shop.findById(id);
};
// delete
module.exports.delete = (id) => {
    return Shop.deleteOne({ _id: id });
};
// update
module.exports.update = (id, updateData) => {
    return Shop.findByIdAndUpdate(id, updateData);
};
