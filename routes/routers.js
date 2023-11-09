const express = require('express'),
    router = express.Router(),
    controller = require('../contorllers/authControllers'),
    multer = require('../middleware/multer'),
    multerLib = require('multer')();

router.post('/create', multer.image.single('url'), controller.create);
router.post('/upload', multerLib.single('url'), controller.upload);
router.get('/users', controller.getUsers),
router.get('/users/:id', controller.getUsersById),
router.delete('/delete/id', controller.deleteUsers)


module.exports = router