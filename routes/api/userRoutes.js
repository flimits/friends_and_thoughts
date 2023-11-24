const router = require('express').Router();
const {
  getUsers,
  createUsers,
  findAUser,
  deleteAUser,
} = require('../../controllers/user.js');

// /api/users .. get all users and create a user
router.route('/').get(getUsers).post(createUsers);

// /api/users as well, to get one user or delete one user by id
router.route('/:userId').get(findAUser);
// router.route('/:userId').get(findAUser).post(deleteAUser);
// /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;