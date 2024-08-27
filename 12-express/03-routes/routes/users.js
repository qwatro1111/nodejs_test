const express = require('express');
const router = express.Router();

const {
    getUsersHendler,
    getSingleUserHendler,
    postUsersHendler,
} = require('../controllers/users');

router.get('/', getUsersHendler);
router.post('/', postUsersHendler);
router.get('/:userId', getSingleUserHendler);

module.exports = router;
