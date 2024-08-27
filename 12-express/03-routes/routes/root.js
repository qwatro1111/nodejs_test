const express = require('express');
const router = express.Router();

const { getRootHendler } = require('../controllers/root');

router.get('/', getRootHendler);

module.exports = router;
