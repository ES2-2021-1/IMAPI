const User = require("../models").User;
const Validator = require('validatorjs');
const bcrypt = require('bcrypt');

class UserController{
    index (req, res) {
        User.findAll().then((response) => {
            res.status(200);
            res.json(response);
            return;
        }).catch((err) => {
            let ret = new Object();
            if(err.errors){
                err.errors.forEach(error => {
                    ret[error.path] = [error.message] 
                });
            } else {
                ret[err.name] = [err.message]
            }
            res.status(400);
            res.json({errors : ret});
            return;
        })
    }

    store (req, res) {
        let salt = 10;

        let rules = {
            'name': 'required|string|between:3,255',
            'email' : 'required|email',
            'password' : 'required|between:6,30|confirmed',
            'password_confirmation' : 'required|between:6,30',
            'phone' : 'regex:/\\([0-9]{2}\\)[0-9]{4,5}\\-[0-9]{4}/',
            'cpf' : 'regex:/[0-9]{11}/',
            'role' : 'required|integer|min:0|max:1'
        };

        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.send(validator.errors);
            return;
        }

        bcrypt.hash(req.body.password, salt, (err, encrypted) => {
            req.body.password = encrypted;

            User.create(req.body).then((response) => {
                res.status(201);
                res.json({...response.dataValues, password: ""});
                return;
            }).catch((err) => {
                let ret = new Object();
                if(err.errors){
                    err.errors.forEach(error => {
                        ret[error.path] = [error.message] 
                    });
                } else {
                    ret[err.name] = [err.message]
                }
                res.status(400);
                res.json({errors : ret});
                return;
            });
        });
    }

    show (req, res) {
        User.findAll(
            {
                where: {
                    id : req.params.id
                }
            }
        ).then((response) => {
            res.status(200);
            res.json(response);
            return;
        }).catch((err) => {
            let ret = new Object();
            if(err.errors){
                err.errors.forEach(error => {
                    ret[error.path] = [error.message] 
                });
            } else {
                ret[err.name] = [err.message]
            }
            res.status(400);
            res.json({errors : ret});
            return;
        })
    }

    update (req, res) {
        let salt = 10;

        let rules = {
            'name': 'string|between:3,255',
            'email' : 'email',
            'password' : 'between:6,30|confirmed',
            'password_confirmation' : 'between:6,30',
            'phone' : 'regex:/\\([0-9]{2}\\)[0-9]{4,5}\\-[0-9]{4}/',
            'cpf' : 'regex:/[0-9]{11}/',
            'role' : 'integer|min:0|max:1'
        };

        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.send(validator.errors);
            return;
        }

        if(req.body['password']){
            bcrypt.hash(req.body.password, salt, (err, encrypted) => {
                req.body.password = encrypted;
    
                User.update(req.body, {where: { id: req.params.id }}).then((response) => {
                    if(response){
                        res.status(200);
                        res.json("Update performed successfully");
                        return;
                    } 
                    res.status(400);
                    res.json("update not performed");
                    return;
                }).catch((err) => {
                    let ret = new Object();
                    if(err.errors){
                        err.errors.forEach(error => {
                            ret[error.path] = [error.message] 
                        });
                    } else {
                        ret[err.name] = [err.message]
                    }
                    res.status(400);
                    res.json({errors : ret});
                    return;
                });
            });
        }

        User.update(req.body, {where: { id: req.params.id }}).then((response) => {
            if(response){
                res.status(200);
                res.json("Update performed successfully");
                return;
            } 
            res.status(400);
            res.json("update not performed");
            return;
        }).catch((err) => {
            console.log(err);
            let ret = new Object();
            if(err.errors){
                err.errors.forEach(error => {
                    ret[error.path] = [error.message] 
                });
            } else {
                ret[err.name] = [err.message]
            }
            res.status(400);
            res.json({errors : ret});
            return;
        });        
    }

    destroy (req, res) {
        User.destroy({
            where: {
              id: req.params.id,
            }
        }).then((response) => {
            if(response){
                res.status(200);
                res.json("Deleted successfully");
                return;
            }
            res.status(200);
            res.json("Not deleted");
            return;
            
        }).catch((err) => {
            console.log(err);
            let ret = new Object();
            if(err.errors){
                err.errors.forEach(error => {
                    ret[error.path] = [error.message] 
                });
            } else {
                ret[err.name] = [err.message]
            }
            res.status(400);
            res.json({errors : ret});
            return;
        })
    }
}

module.exports = new UserController();