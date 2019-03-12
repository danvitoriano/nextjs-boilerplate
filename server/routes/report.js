'use string';

const express = require('express');
const router = express.Router();

const report = require('../../fixtures/report.json');

router.get('/api/report', (req, res) => res.status(200).json(report));

module.exports = router;
