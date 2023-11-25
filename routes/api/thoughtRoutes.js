const router = require('express').Router();

// Setting up all routes for thought(s)
const {
  getThoughts,
  createThought,
  findAThought,
  deleteAThought,
  updateAThought,
} = require('../../controllers/thought.js');

// /api/thought .. get all thought and create a thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought as well, to get one thought or delete one thought by id
router.route('/:thoughtId').get(findAThought).delete(deleteAThought).put(updateAThought);


module.exports = router;
