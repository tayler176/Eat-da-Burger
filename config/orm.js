var connection = require("../config/connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result)
        });
    },
    insertOne: function (burger, cb) {
        var queryString = "INSERST INTO burgers (name) VALUE (?)";
        connection.query(queryString, [burger], function(err, result){
            if(err){console.log(err)};
            cb(result)
        })
    },
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE ?;"
        connection.query(queryString, [id], function(err, result){
            if(err){console.log(err)};
            cb(result)
        })
    }
};

module.exports = orm;