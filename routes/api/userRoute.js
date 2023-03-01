const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('../../models/users');
const authenticate = require('../../auth');
const cors = require('../cors');

const router = express.Router();
router.use(bodyParser.json());

router.options('*', cors.corsWithOptions, (req, res) => {
  res.sendStatus(200);
});

router.get('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
  try {
    const users = await User.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.put('/:userId', cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.put('/password/:userId', cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user && !user.admin) {
      user.setPassword(req.body.password, function () {
        user.save();
        res.status(200).json({ message: 'password changed successfully' });
      });
    } else if (!user) {
      res.status(500).json({ message: "User doesn't exist" });
    } else {
      res.status(400).json({ message: "Password of an admin can't be changed this way. Contact the webmaster" });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/signup', cors.corsWithOptions, async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      roll: req.body.roll,
    });
    const registeredUser = await User.register(user, req.body.password);
    passport.authenticate('local')(req, res, () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: true, status: 'Registration Successful!' });
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.json({ err: err });
    next(err);
  }
});

router.post('/login', cors.corsWithOptions, passport.authenticate('local'), async (req, res, next) => {
  try {
    const token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, status: 'Login Successful!', token: token, userinfo: req.user });
  } catch (err) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!' });
    next(err);
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, status: 'You are successfully logged out!'});
});

router.get('/checkJWTtoken', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, status: 'JWT valid!', user: req.user});
});

module.exports = router;
