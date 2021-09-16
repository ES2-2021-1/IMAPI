const multer = require('multer');
const path = require('path');

relative_destination_path = 'public/uploads'

multerConfig = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null,  path.resolve(__dirname, '../../front-end/', relative_destination_path));
        },
        filename: (req, file, cb) => {
            const uniqueName = Date.now() +'-'+ Math.round(Math.random() * 1E9) +'-'+ Math.round(Math.random() * 1E9);
            return cb(null, uniqueName + path.extname(file.originalname));
        },
    }),
}

module.exports = {
    destination_path: relative_destination_path,
    config: multerConfig
};
