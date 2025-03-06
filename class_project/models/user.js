const users = [
  {
    email:"rramesh@pratt.edu",
    name:"Ritika",
    salt:"9821ea0e75c6046e96e38f905ab0e436",
    encryptedPassword:"31df8d4e1b6ca4facf4e45f55307704f7ba794c6c265495964c0a768faab4b6b"
  }
]

var crypto = require('crypto');

const createSalt = () => {
  return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex')
}

exports.register = (user) => {
  if (exports.getByEmail(user.email)){
    return false
  }
  let salt = createSalt();
  let newUser = {
    email: user.email,
    name: user.name,
    salt: salt,
    encryptedPassword: encryptPassword(user.password, salt)
  }
  users.push(newUser);
  return true;
}

exports.getByEmail = (email) => {
  return users.find((user)=>{return user.email.toLowerCase() === email.toLowerCase()});
}

exports.login = (login) => {
  let user = exports.getByEmail(login.email);
  if (user) {
    let encryptedPassword = encryptPassword(login.password, user.salt)
    if (user.encryptedPassword == encryptedPassword) {
      return user;
    }
  }
  return null;
}