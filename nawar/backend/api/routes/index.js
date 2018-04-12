const express = require('express'),
  router = express.Router(),
  asyncMiddleware = require('express-async-handler'),
  authenticationCtrl = require('../controllers/AuthenticationController');
  scheduleCtrl = require('../controllers/ScheduleController');
//Login Routes
router.post('/login', asyncMiddleware(authenticationCtrl.checkCredentials));
router.post('/signup', asyncMiddleware(authenticationCtrl.createUser));
//schedule Routes
router.get('/Schedule/getSchedules', asyncMiddleware(scheduleCtrl.getSchedules));
router.post('/schedule/createSchedule', asyncMiddleware(scheduleCtrl.createSchedule));
router.delete('/schedule/deleteSlot/:slotId', asyncMiddleware(scheduleCtrl.deleteSlot));


module.exports = router;
