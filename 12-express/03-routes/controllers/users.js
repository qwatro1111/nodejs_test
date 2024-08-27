const getUsersHendler = (req, res) => {
    res.send('Get users handler!');
};
const getSingleUserHendler = (req, res) => {
    res.send(`Get user id ${req.params.userId}`);
};
const postUsersHendler = (req, res) => {
    res.send('Post users handler!');
};

module.exports = {
    getUsersHendler,
    getSingleUserHendler,
    postUsersHendler,
};
