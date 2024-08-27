const express = require('express');
const {
    getCommentsHendler,
    getSingleCommentHendler,
    postCommentsHendler,
    deleteSingleCommentHendler,
} = require('../controllers/comments');

const router = express.Router();

router.get('/', getCommentsHendler);
router.post('/', postCommentsHendler);
router.get('/:commentId', getSingleCommentHendler);
router.delete('/:commentId', deleteSingleCommentHendler);

module.exports = router;
