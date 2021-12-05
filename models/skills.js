const mongoose = require("mongoose")

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  level: {
    type: String,
    unique: true
  }
}, {collection: "skills"})

// skillSchema.index({id: -1, name: 1})

module.exports = mongoose.model("Skill", skillSchema)