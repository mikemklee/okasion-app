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
    newEvent.save().then(event => res.json(event));
  }
);

// @route   POST api/events/go/:id
// @desc    Attend Event
// @access  Private
router.post(
  "/go/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.findById(req.params.id)
      .then(event => {
        // check if already liked
        if (
          event.attendees.filter(
            attendee => attendee.user.toString() === req.user.id
          ).length > 0
        ) {
          return res
            .status(400)
            .json({ alreadygoing: "User already going to this event" });
        }

        // Add user id to attendees array
        event.attendees.unshift({ user: req.user.id });

        event.save().then(event => res.json(event));
      })
      .catch(error =>
        res.status(404).json({ eventnotfound: "No event found" })
      );
  }
);

// @route   POST api/events/nogo/:id
// @desc    Unattend post
// @access  Private
router.post(
  "/nogo/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.findById(req.params.id)
      .then(event => {
        // check if already attending
        if (
          event.attendees.filter(
            attendee => attendee.user.toString() === req.user.id
          ).length === 0
        ) {
          return res
            .status(400)
            .json({ notattendingyet: "User have not yet attended this event" });
        }

        // Get remove index
        const removeIndex = event.attendees
          .map(item => item.user.toString())
          .indexOf(req.user.id);

        // Splice out of array
        event.attendees.splice(removeIndex, 1);

        // Save
        event.save().then(event => res.json(event));
      })
      .catch(error =>
        res.status(404).json({ eventnotfound: "No event found" })
      );
  }
);

module.exports = router;
