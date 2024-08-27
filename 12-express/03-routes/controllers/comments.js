const getCommentsHendler = (req, res) => {
    res.send('Get comments handler!');
};
const getSingleCommentHendler = (req, res) => {
    res.send(`Get comment id ${req.params.commentId}`);
};
const deleteSingleCommentHendler = (req, res) => {
    res.send(`Delete comment id ${req.params.commentId}`);
};
const postCommentsHendler = (req, res) => {
    res.send('Post comments handler!');
};

module.exports = {
    getCommentsHendler,
    getSingleCommentHendler,
    deleteSingleCommentHendler,
    postCommentsHendler,
};
