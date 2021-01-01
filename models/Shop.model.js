const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const shopSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true,
        },
        owner: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
// shops
// schools
// admins
module.exports = mongoose.model("Shop", shopSchema);
// module.exports = mongoose.model("Shop", shopSchema).create({name: "Mugdho", age: 16})
