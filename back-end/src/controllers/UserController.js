const User = require("../models").User;
const Validator = require('validatorjs');


class UserController{
    index (req, res) {
        res.send("Função de index");
    }

    store (req, res) {
        let rules = {
            'name': 'required|string|between:3,255',
            'email' : 'required|email',
            'password' : 'required|between:6,30',
            'phone' : 'regex:/\\([0-9]{2}\\)[0-9]{4,5}\\-[0-9]{4}/',
            'cpf' : 'regex:/[0-9]{11}/',
            'role' : 'required|integer|min:0|max:1'
        }

        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.send(validator.errors);
        }

        User.create(req.body).then(response => {
            res.status(201);
            res.json({...response.dataValues, password: ""});
        },err => {
            console.log(err.errors);
            let ret = new Object();
            err.errors.forEach(error => {
                ret[error.path] = [error.message] 
            });
            res.status(400);
            res.json({errors : ret});
        });
    }

    show (req, res) {
        res.send("Função de show " + req.params.id);
    }

    update (req, res) {
        res.send("Função de update " + req.params.id);
    }

    destroy (req, res) {
        res.send("Função de destroy " + req.params.id);
    }
}

module.exports = new UserController();