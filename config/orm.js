
var connection = require("./connection.js");

var orm = {
        all: function(cb){
            connection.query('select * from burgers', function(err, res){
              if (err) {
                throw err;
              }
              cb(res);
            });

        },

    create: function(burger,cb){
           connection.query('INSERT INTO burgers (burger, devour) VALUES (?,?)', [burger, true], function(err, res){
              if (err) {
                throw err;
              }
              cb(res);
            });
        },

    update: function(burgerID, cb){
            connection.query('UPDATE burgers SET devour = ? where id = ?', [false, burgerID], function(err, res){
              if (err){
                throw err;
              }
              cb(res);
          });
        }

};



module.exports = orm;
