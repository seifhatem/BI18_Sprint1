const mongoose = require('mongoose'),
moment = require('moment'),
schedule = mongoose.model('Schedule');
Validations = require('../utils/Validations'),

module.exports.getSchedules = async (req, res) => {
  const schedules = await schedule.find({}).exec();
  res.status(200).json({
    err: null,
    msg: 'Schedule retrieved successfully.',
    data: schedules
  });
};

module.exports.createSchedule = async (req, res) => {
  const valid =
    req.body.sat &&
    Validations.isString(req.body.sat) &&
    req.body.sun &&
    Validations.isString(req.body.sun) &&
    req.body.mon &&
    Validations.isString(req.body.mon) &&
    req.body.tue &&
    Validations.isString(req.body.tue) &&
    req.body.wed &&
    Validations.isString(req.body.wed) &&
    req.body.thu &&
    Validations.isString(req.body.thu) &&
    req.body.slot &&
    Validations.isString(req.body.slot);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'day(String) and slot(Number) are required fields.',
      data: null
    });
  }
  const Schedule = await schedule.create(req.body);
  res.status(201).json({
    err: null,
    msg: 'Schedule was created successfully.',
    data: Schedule
  });
};
  module.exports.deleteSlot = async (req, res) => {
  if (!Validations.isObjectId(req.params.slotId)) {
    return res.status(422).json({
      err: null,
      msg: 'slotId parameter must be a valid ObjectId.',
      data: null
    });
  }
  const deletedSlot= await schedule.findByIdAndRemove(
    req.params.slotId
  ).exec();
  if (!deletedSlot) {
    return res
      .status(404)
      .json({ err: null, msg: 'Slot not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'Slot was deleted successfully.',
    data: deletedslotId
  });
};
