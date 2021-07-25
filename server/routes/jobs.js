const express = require('express');
const router = express.Router();
const jobs = require('../services/jobs');

/* GET quotes listing. */
router.get('/new', async function(req, res, next) {
  try {
    res.json(await jobs.getNewJobs());
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

router.get('/accepted', async function(req, res, next) {
    try {
      res.json(await jobs.getAcceptedJobs());
    } catch (err) {
      console.error(`Error while getting quotes `, err.message);
      next(err);
    }
  });

router.post('/update', async function(req, res, next) {
    try {
        console.log('req', req.body);
      res.json(await jobs.updateJobStatus(req.body.id, req.body.status));
    } catch (err) {
      console.error(`Error while getting quotes `, err.message);
      next(err);
    }
  });

module.exports = router;