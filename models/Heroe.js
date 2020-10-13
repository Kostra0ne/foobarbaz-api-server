const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroeSchema = new Schema({
  name: String,
  powerstats: {
    intelligence: Number,
    strength: Number,
    speed: Number,
    durability: Number,
    power: Number,
    combat: Number,
  },
  biography: {
    "full-name": String,
    "alter-egos": {
      type: String,
      default: "No alter egos found.",
    },
    aliases: [String],
    "place-of-birth": String,
    "first-appearance": String,
    publisher: String,
    alignment: {
      type: String,
      enum: ["good", "bad"],
    },
  },
  appearance: {
    gender: {
      type: String,
      enum: ["Female", "Male"],
    },
    race: String,
    height: [String],
    weight: [String],
    "eye-color": String,
    "hair-color": String,
  },
  work: {
    occupation: String,
    base: String,
  },
  connections: {
    "group-affiliation": String,
    relatives: String,
  },
  image: {
    url: {
      type: String,
      default:
        "https://res.cloudinary.com/gdaconcept/image/upload/v1594970568/no-image-logo_y5khfl.png",
    },
  },
});

const HeroeModel = mongoose.model("Heroe", heroeSchema);

module.exports = HeroeModel;
