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

      res.json({
        user,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteAUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user to delete with that ID' });
      }

      res.json({ user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateAUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user to update with that ID' });
      }

      res.json({ user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

}
