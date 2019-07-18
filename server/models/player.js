const mongoose = require("mongoose"),
    uniqueValidator = require("mongoose-unique-validator")
;

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is a required field"],
        minlength: [2, "Player name must be at least 2 characters long"],
        unique: true
    },
    position: {
        type: String
    },
    status1: {
        type: String,
        default: "yellow"
        // playing, not playing, undecided
        // green, red, yellow
    },
    status2: {
        type: String,
        default: "yellow"
    },
    status3: {
        type: String,
        default: "yellow"
    }
}, {timestamps: true});

mongoose.model("Player", PlayerSchema);
var Player = mongoose.model('Player');
PlayerSchema.plugin(uniqueValidator, {message: "This {PATH} is already taken."})
mongoose.Promise = global.Promise;
