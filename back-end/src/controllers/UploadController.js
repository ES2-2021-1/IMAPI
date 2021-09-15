const Validator = require('validatorjs');
const multer  = require('multer')
const multerUploadPath = require('../../config/multer-config').destination_path;
const multerConfig = require('../../config/multer-config').config;
const upload = multer(multerConfig).single('upload');

const fs = require('fs');

class UploadController {
    async store (req, res) {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                res.status(400);
                return res.json({
                    error: "Could not save file. "+err.message
                });
            }
            
            const { file } = req;

            if (file) {
                return res.json({
                    path: multerUploadPath + '/' +file.filename
                });
            }

            res.status(400);
            return res.json({
                error: "Could not save file."
            });
        })
        
    }

    async destroy (req, res) {
        fs.unlink(req.body.path, (err)=> {
            if (err) {
                res.status(400);
                res.json({ response: "Could not delete file. Verify the path and try again."});
                return;
            }
        })
        res.json({ response: "Deleted successfully"})
    } 
}

module.exports = new UploadController();
