const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        name: {
            type: 'string',
            required: true,
            trim: true,
        },
        email: {
            type: 'string',
            required: true,
            trim: true,
        },
        password: {
            type: 'string',
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
//users
module.exports = mongoose.model('user', userSchema);
