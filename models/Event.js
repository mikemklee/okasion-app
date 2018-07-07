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
  hostPhoto: {
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
  address: {
    type: String,
    required: true
  },
  latlng: {
    lat: {
      type: Number
    },
    lng: {
      type: Number
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  attendees: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Event = mongoose.model("event", EventSchema);
