var jwt = require('jsonwebtoken');
const User = require("../models").User;
const Validator = require('validatorjs');
const bcrypt = require('bcrypt');
require('dotenv').config();

class AuthController{
    async store (req, res) {
        let data = req.body;
        const rules = {
            'email': 'required|string',
            'password': 'required|string',
        };

        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.status(400);
            res.send(validator.errors);
            return;
        }

        let user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if(user == null){
            res.status(401);
            res.json({"error": "Invalid email or password"});
            return;
        }

        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (result){
                let token = jwt.sign({"id": user.id}, process.env.JWT_SECRET, {expiresIn: process.env.SESSION_LIFETIME});
                res.status(200);
                res.json({"token":token, "userId": user.id});
                return;
            }
            if(err){
                console.log(err);
            }
            res.status(401);
            res.json({"error": "Invalid email or password"});
            return;
        });
    }
}

module.exports = new AuthController();
