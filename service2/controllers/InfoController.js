const getInfo = (req, res) => {
    res.json({ message: 'Hello From Service B' });
};

module.exports = { getInfo };