const { read, write } = require('../utility/db');

module.exports.login = async (req, res) => {
  const registeredUsers = await read();
  const { email, password } = req.body;
  const { password: actualPassword } = registeredUsers[email] || { password: null };
  const isCredentialValid = password === actualPassword;
  if (isCredentialValid) {
    req.session.user = email;
  }

  res.json({
    status: isCredentialValid,
  });
};

module.exports.logout = (req, res) => {
  req.session.destroy((err) => {
    // eslint-disable-next-line no-console
    if (err) console.log(err);
  });
  res.json({
    status: 'logged out',
  });
};

module.exports.register = async (req, res) => {
  const registeredUsers = await read();

  const { name, email, mobile, password } = req.body;
  if (email in registeredUsers) {
    res.status(400).json({
      error: 'user exists',
    });
  }

  registeredUsers[email] = {
    name,
    mobile,
    password,
  };

  await write(registeredUsers);
  res.json({
    status: 'registered',
  });
};

module.exports.isAuthenticated = (req, res) => {
  res.json({
    status: !!req.session.user,
  });
};
