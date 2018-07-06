const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true,
    max: 40
  },
  host: {
    type: String
  },
  topic: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    max: 200
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model("event", EventSchema);
