var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll( function(res){
            cb(res);
            console.log("select all function")
        })
    },
    insertOne: function(burger ,cb) {
        orm.insertOne(burger,function(res){
            cb(res);
            console.log("inseset one function")
        })
    },
    updateOne: function(id, cb) {
        orm.updateOne([id] ,function(res){
            cb(res);
            console.log("update one function")
        })
    }
}

module.exports = burger;