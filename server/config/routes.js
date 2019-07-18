const mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      players = require('../controllers/players.js'),
      path = require('path');
;
module.exports = function(app){
    app.get("/players", function(req, res) {
        players.allPlayers(req,res);
    });
    app.get("/players/:id", function(req, res) {
        players.showPlayer(req, res);
    })
    app.put("/players/:id", function(req, res) {
        players.editPlayer(req,res);
    });
    app.post("/players", function(req, res) {
        players.createPlayer(req, res);
    });
    app.delete("/players/:id", function(req, res) {
        players.deletePlayer(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
