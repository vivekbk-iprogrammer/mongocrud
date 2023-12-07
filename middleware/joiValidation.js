const Joi = require('joi');

const joivalidation = (req, res, next) => {
    const { name, email, password } = req.body;
    const user = {
        name,
        email,
        password
    };

    const schema = Joi.object({
        name: Joi.string().min(3).max(40),
        email: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(5).max(30).required(),
    });

    const { error } = schema.validate(user);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();
};

module.exports = joivalidation;
