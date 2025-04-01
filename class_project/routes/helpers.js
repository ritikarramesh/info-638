exports.isLoggedIn = (req, res) => {
  if (req.session.currentUser) {
    req.session.flash = {
      type: 'info',
      intro: 'Error!',
      message: 'You are already logged in',
    };
    res.redirect(303, '/');
    return true;
  }
  return false;
}

exports.ForceLoggedInUser = (req, res) => {
  if (req.session.currentUser) {
    return false;
  }
  req.session.flash = {
    type: 'info',
    intro: 'Error!',
    message: 'You have to be logged in for this behavior',
  };
  res.redirect(302, '/');
  return true;
}