const { read } = require('../utility/db');

module.exports.info = async (req, res) => {
  const email = req.session.user;
  const { name, mobile } = (await read())[email];
  res.json({
    name,
    mobile,
    email,
  });
};
