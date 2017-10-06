
var orm = require("../config/orm.js");


module.exports = function(app){



    app.get("/", function(req,res){
        orm.all(function(data){
          var dataObj = new Object;
          dataObj.daburger = data;
          res.render("index",dataObj);
        });
    });


    app.post("/", function(req, res){
          orm.create(req.body.burgername, function(result){
              res.redirect("/");
          });
    });


    app.put("/:id", function(req, res){
      var burgerID = req.params.id;
          orm.update(burgerID, function(result){
              res.redirect("/");
         });
    });
};
