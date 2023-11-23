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

async createUsers(req,res){
    try {
        const user = await User.create(req.body);
        res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
}

