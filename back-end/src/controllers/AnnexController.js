const Annex = require("../models").Annex;
const Validator = require('validatorjs');

class AnnexController{
    async index (req, res) {
        Annex.findAll().then((response) => {
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

    async store (req, res) {
        let data = req.body;
        const rules = {
            'path': 'required|string',
            'type': 'required|integer|min:0|max:2',
            'submissionId': 'required_if:type,2|integer|min:1',
            'taskId': 'required_if:type,1|integer|min:1',
            'stepId': 'required_if:type,0|integer|min:1',
        };

        const validator = new Validator({ ...data, type: data.type.toString() }, rules);

        if (validator.fails()){
            res.status(400);
            res.send(validator.errors);
            return;
        }

        if (data.type == 0) {
            data = {... data, taskId: undefined, submissionId: undefined}
        } else if (data.type == 1) {
            data = {... data, stepId: undefined, submissionId: undefined}
        } else if (data.type == 2) {
            data = {... data, stepId: undefined, taskId: undefined}
        }

        Annex.create(data).then((response) => {
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

    async show (req, res) {
        const annexId = req.params.id;
        const rules = {
            'annexId': 'required|integer|min:1'
        }

        const validator = new Validator({ annexId }, rules);

        if (validator.fails()){
            res.send(validator.errors);
            return;
        }

        Annex.findByPk(annexId).then(annex => {
            if (annex) {
                res.status(200);
                res.json(annex);
                return;
            } 
            res.status(404);
            res.json("Annex not found");
            return;
        }).catch(err => {
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

    async update (req, res) {
        const annexId = req.params.id;
        const data = req.body;

        const validator = new Validator({ ...data, annexId: annexId }, {
            'annexId': 'required|integer|min:1',
            'path': 'required|string'
        });

        if (validator.fails()){
            res.send(validator.errors);
            return;
        }

        Annex.update({ path: data.path }, { where: { id: req.params.id } }).then((response) => {
            if(response == 1){
                res.status(200);
                res.json("Update performed successfully");
                return;
            }
            res.status(400);
            res.json("Update not performed");
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

    async destroy (req, res) {
        const annexId = req.params.id;
        const rules = {
            'annexId': 'required|integer|min:1'
        }

        const validator = new Validator({ annexId }, rules);

        if (validator.fails()){
            res.send(validator.errors);
            return;
        }

        Annex.destroy({
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
            res.json("Annex not found");
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
}

module.exports = new AnnexController();
