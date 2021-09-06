const Task = require("../models").Task;
const Validator = require('validatorjs');


class TaskController{
    index (req, res) {

        Task.findAll().then(
            response => {
                console.log(response)
                res.status(201);
                res.json(response);

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
            res.send(validator.errors);
        }

       Task.create(req.body).then(
           response => {
           
            res.status(201);
            res.json({...response.dataValues});

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
            res.send(validator.errors);
        }

        Task.update(req.body, { where: { id: req.params.id } }).then(
            response => {
            
             res.status(201);

             // MESMO SE NAO FOR ATUALIZADO NAO CAI NO ERRO, APENAS RETORNA 0, ENTÃO FIZ ISSO :)
             res.json({done: response[0] == 1 ? true : false });
 
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
               
         });

    }

    destroy (req, res) {

        Task.destroy({
            where: {
              id: req.params.id
            },
          }).then(

            response => {

             res.status(201);
             res.json({done: response == 1 ? true : false });
 
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
               
         });
    }
}

module.exports = new TaskController();