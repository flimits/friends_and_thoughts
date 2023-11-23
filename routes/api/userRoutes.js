const router = require('express').Router();
const {
  getUsers,
  createUsers,
} = require('../../controllers/user.js');

// /api/courses
router.route('/').get(getUsers).post(createUsers);

// /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;