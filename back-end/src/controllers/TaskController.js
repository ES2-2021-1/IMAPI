const Task = require("../models").Task;
const Validator = require('validatorjs');


class TaskController{
    index (req, res) {

        Task.findAll().then(
            response => {
                console.log(response)
                res.status(201);
                res.json(response);
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
    
                res.json(err)
                return;
               
         });;
        
    }


    store (req, res)  {
            /*
                ***********OBS **************
                PARA ADICIONAR UMA TASK É PRECISO TER UM MODULO E UMA ETAPA ADICIONADO PARA USAR A FK
                
            */
        let rules = {

            'title': 'required|string|between:3,255',
            'description' : 'required|string', //nao defini um tamanho
            'stepId' :'required|integer' ,

        }

        //console.log('AQUIII')
    
        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.status(400);
            res.send(validator.errors);
            return;
        }

       Task.create(req.body).then(
           response => {
           
            res.status(201);
            res.json({...response.dataValues});
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
    
                res.json(err)
                return;
               
         });
    }

    show (req, res) {
        /* ESSE FIND PELO ID DO TASK ACHO QUE PODERIA SER PELO ID FK DO MODULO, OU UM PARAM QUE ESCOLHE SE É PELO MODULO OU A PROPRIA TASK*/ 
        
        Task.findOne({
            where: {
              id: req.params.id
            }
          }).then(response => {
                console.log(response)
                res.status(201);
                res.json({...response.dataValues});
                return;

            }

          ).catch(err => {
                
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

            res.json(err)
            return;
           
     });

        
    }

    update (req, res) {

        let rules = {

            'title': 'required|string|between:3,255',
            'description' : 'required|string', //nao defini um tamanho
            'stepId' :'required|integer' ,

        }

        let validator = new Validator(req.body, rules);

        if (validator.fails()){
            res.status(400);
            res.send(validator.errors);
            return;
        }

        Task.update(req.body, { where: { id: req.params.id } }).then(
            response => {
            
            if(response[0]){
                res.status(200);
                res.json("Updated successfully");
                return;
            }
            res.status(400);
            res.json("Not updated");
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
    
                res.json(err)
                return;
               
         });

    }

    destroy (req, res) {

        Task.destroy({
            where: {
              id: req.params.id
            },
          }).then(

            response => {

                if(response){
                    res.status(200);
                    res.json("Deleted successfully");
                    return;
                }
                res.status(400);
                res.json("Not deleted");
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
    
                res.json(err)
                return;
               
         });
    }
}

module.exports = new TaskController();