'use strict';

var contactService = require('../services/contact.server.service');

module.exports.getContacts = function (req, res) {
    contactService.getContacts(function (contacts) {
        res.status(200);
        res.json(contacts);
    });
}

module.exports.createContact = function (req, res) {
    var contact = req.body;
    contactService.saveContact(contact, function (err, contact) {
        console.log("saved contact in server ctrl " + contact);
        if (err) {
            res
                .status(400)
                .send("Error!! Please enter correct data and try again")
        } else
        {
            res
                .status(200)
                .send("Contact has been saved");
        }
    });
}

module.exports.updateContact = function (req, res) {
    var updatedContact = req.body,
        contactID = req.metadata.contactId;

    contactService.updateContact(contactID, updatedContact, function (err) {
        if (err) {
            res.status(400)
                .send("Error:: Unable to update contact. Please try again!!");
        } else {
            res.status(200)
                .send("Contact has been updated successfully.");
        }
    });
}

module.exports.deleteContact = function (req, res) {
    var contactID = req.metadata.contactId;

contactService.deleteContact(contactID,function (isDeleted) {
    if (isDeleted) {
        res.status(200)
            .send("Successfully deleted contact.");
    } else {
        res.status(400)
            .send("Error:: Unable to delete contact. Please try again!!");
    }
});
}


module.exports.validateContactIdAndForward = function (req, res, next, id) {
    var metadata = req.metadata = {};
    metadata.contactId = id;
    next();
}

module.exports.getContactById = function (req, res) {
    var id = req.metadata.contactId;
    contactService.findContactById(id,function (err,foundContact) {
        if (err) {
            res.status(400)
                .send("Error:: Unable to find contact. Please try again!!");
        } else {
            res.status(200)
                .json(foundContact);
        }
    });
}

module.exports.findContactByCity = function (req,res) {
    var city = req.params.city;
    contactService.findContactByCity(city,function (err,foundContact) {
        if (err) {
            res.status(400)
                .send({message: "Error:: Unable to find contact. Please try again!!"});
        } else {
            res.status(200)
                .json(foundContact);
            }
    })
}

module.exports.getContactByNum = function (req,res) {
    var num = req.params.num;
    contactService.getContactByNum(num,function (err,foundContact) {
        if (err) {
            res.status(400)
                .send({message: "Error:: Unable to find contact. Please try again!!"});
        } else {
            res.status(200)
                .json(foundContact);
        }
    })
}
module.exports.getTopContacts = function (req,res) {
    contactService.getTopContacts(function (err,foundContact) {
        if (err) {
            res.status(400)
                .send({message: "Error:: Unable to find contact. Please try again!!"});
        } else {
            res.status(200)
                .json(foundContact);
        }
    })
}