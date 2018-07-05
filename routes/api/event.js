const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateEventInput = require("../../validation/event");

// Load Event Model
const Event = require("../../models/Event");

// Load User Model
const User = require("../../models/User");

// @route   GET api/event/test
// @desc    Tests event route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Event works" }));

// @route   GET api/event/all
// @desc    Get all events
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Event.find()
    .then(events => {
      if (!events) {
        errors.noevent = "There are no events";
        return res.status(404).json(errors);
      }
      console.log(events);
      res.json(events);
    })
    .catch(error => res.status(404).json({ event: "There are no events" }));
});

// @route   POST api/event
// @desc    Create or edit user event
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    // Get fields
    const eventFields = {};
    eventFields.user = req.user.id;
    if (req.body.name) profileFields.name = req.body.name;

    Event.findOne({ user: req.user.id }).then(event => {
      if (event) {
        // Update
        Event.findOneAndUpdate(
          { user: req.user.id },
          { $set: eventFields },
          { new: true }
        ).then(event => {
          res.json(event);
        });
      } else {
        // Create
        // Save Event
        new Event(eventFields).save().then(event => res.json(event));
      }
    });
  }
);

// @route   DELETE api/event
// @desc    Delete event
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("removed event");
  }
);

module.exports = router;
