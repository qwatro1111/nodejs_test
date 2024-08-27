const express = require('express');
const router = express.Router();

const rootRouter = require('./root');
const commentsRouter = require('./comments');
const usersRouter = require('./users');

router.use('/', rootRouter);
router.use('/comments', commentsRouter);
router.use('/users', usersRouter);

module.exports = router;
