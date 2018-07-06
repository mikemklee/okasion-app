const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateEventInput = require("../../validation/event");

// Load Event Model
const Event = require("../../models/Event");

// @route   GET api/events
// @desc    Get events
// @access  Public
router.get("/", (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then(events => res.json(events))
    .catch(error => res.status(404));
});

// @route   POST api/events
// @desc    Create event
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    // Check Validation
    if (!isValid) {
      // if any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newEvent = new Event({
      title: req.body.title,
      host: req.body.host,
      description: req.body.description,
      date: req.body.date,
      topic: req.body.topic,
      avatar: req.body.avatar,
      user: req.user.id
    });
    console.log("created: ", newEvent);
    newEvent.save().then(event => res.json(event));
  }
);

module.exports = router;
