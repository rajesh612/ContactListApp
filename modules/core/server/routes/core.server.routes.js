'use strict';

module.exports = function(app){

    var controller = require('../controllers/core.server.controller'),
        userController = require('../controllers/user.server.controller'),
        mainController = require('../controllers/main.server.controller');

    app
        .route('/')
        .get(mainController.index);
    
    // Get and create Contact
    app
        .route('/api/contact')
        .get(controller.getContacts)
        .post(controller.createContact);

    // Update and delete operations
    app
        .route('/api/contact/:contactId')
        .get(controller.getContactById)
        .put(controller.updateContact)
        .delete(controller.deleteContact);

    app.param ('contactId', controller.validateContactIdAndForward)

    app
        .route('/api/login')
        .post(userController.findUser);
    app
        .route('/api/register')
        .post(userController.createUser);
}