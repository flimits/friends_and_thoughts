// const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {

  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUsers(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async findAUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      // I might not need email, but it is here if I do.
      // const email = user.email;

      res.json({
        user,
        // email,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
}
