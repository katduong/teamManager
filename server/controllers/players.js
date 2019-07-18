const mongoose = require('mongoose'),
      Player = mongoose.model('Player')
;

module.exports = {
    allPlayers: function(req, res) {
        Player.find({}, function(err, players) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json(players);
            }
        });
    },
    showPlayer: function(req, res) {
        console.log("Showing player", req.params.id)
        Player.findOne({_id: req.params.id}, function(err, player) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                res.json(player);
            }
        });
    },
    editPlayer: function(req, res) {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true}, function(error, player) {
            if (error) {
                res.json({message: "Error", error: error.errors});
            }
            else {
                res.json(player);
            }
        });
    },
    createPlayer: function(req, res) {
        console.log("in the player post route", req.body);
        Player.create(req.body, function(err, player) {
            if (err) {
                res.json({message: "Error", error: err.errors});
            }
            else {
                res.json({message: "Player created successfully", player: player});
            }
        })
    },
    deletePlayer: function(req, res) {
        Player.remove({_id: req.params.id}, function(err) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                console.log("Player deleted successfully");
                res.json({message: "Player deleted successfully"});
            }
        });
    }
};
