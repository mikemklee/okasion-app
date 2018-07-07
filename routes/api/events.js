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

// @route   GET api/event/id/:id
// @desc    Get event by ID
// @access  Public
router.get("/id/:id", (req, res) => {
  const errors = {};
  Event.findOne({ _id: req.params.id })
    .then(event => {
      if (!event) {
        errors.noevent = "There is no event under this id!";
        res.status(404).json(errors);
      }
      res.json(event);
    })
    .catch(error =>
      res.status(404).json({ event: "There is no event under this id!" })
    );
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
      hostPhoto: req.body.hostPhoto,
      address: req.body.address,
      latlng: req.body.latlng,
      user: req.user.id
    });
    console.log("created: ", newEvent);
    newEvent.save().then(event => res.json(event));
  }
);

module.exports = router;
