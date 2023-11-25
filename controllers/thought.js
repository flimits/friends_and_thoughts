// const { ObjectId } = require('mongoose').Types;
const { Thought } = require('../models');

module.exports = {

  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async findAThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({
        thought,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // adding a delete statement in my controller middleware with some error handing to see where it might be failing.
  // I had this a few times. Probably should add this as a standard for the future.
  async deleteAThought(req, res) {
    try {
      console.log("Deleting thought with ID:", req.params.thoughtId);

      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        console.log("No thought found with ID:", req.params.thoughtId);
        return res.status(404).json({ message: 'No thought to delete with that ID' });
      }

      console.log("Thought deleted:", thought);
      res.json({ thought });
    } catch (err) {
      console.error("Error deleting thought:", err);
      res.status(500).json(err);
    }
  },

  // Might need to update a thought. Doing it by thoughtId
  async updateAThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      ).lean(); // Use lean() to get a plain JavaScript object

      if (!thought) {
        return res.status(404).json({ message: 'No thought to update with that ID' });
      }

      res.json({
        thought,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }



}
