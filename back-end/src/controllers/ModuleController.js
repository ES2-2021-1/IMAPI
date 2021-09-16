const Module = require("../models").Module;
const Validator = require('validatorjs');

class StartupController{
    index (req, res) {
        Module.findAll().then((response) => {
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
        let rules = {
            'title': 'required|string|between:3,255'
        };

        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.send(validator.errors);
            return;
        }

        Module.create(req.body).then((response) => {
            res.status(201);
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
        });  
    }

    show (req, res) {
        Module.findAll(
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
        let rules = {
            'title': 'required|string|between:3,255'
        };

        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.send(validator.errors);
            return;
        }

        Module.update(req.body, {where: { id: req.params.id }}).then((response) => {
            if(response){
                res.status(200);
                res.json("Update performed successfully");
                return;
            }
            res.status(400);
            res.json("update not performed");
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
        Module.destroy({
            where: {
              id: req.params.id,
            }
        }).then((response) => {
            if(response){
                res.status(200);
                res.json("Deleted successfully");
                return;
            }
            res.status(400);
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

module.exports = new StartupController();