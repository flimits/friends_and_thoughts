const router = require('express').Router();

// Setting up all routes for user(s)
const {
  getUsers,
  createUsers,
  findAUser,
  deleteAUser,
  updateAUser,
  addFriend,
} = require('../../controllers/user.js');

// /api/users .. get all users and create a user
router.route('/').get(getUsers).post(createUsers);

// /api/users as well, to get one user or delete one user by id
router.route('/:userId').get(findAUser).delete(deleteAUser).put(updateAUser);

// /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendId').post(addFriend);


module.exports = router;