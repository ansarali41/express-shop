const { validationResult } = require("express-validator");

module.exports.checkInvalid = (req, res, next) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        const errorArray = errors.array().map(element => `${element.param} ${element.msg}`);
        return res.status(400).json({ message: errorArray  });
    }

};