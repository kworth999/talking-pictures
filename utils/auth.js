const checkAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
      // res.json("what up");
    } else {
      // console.log("next");
      next();
    };
};
  
module.exports = checkAuth;