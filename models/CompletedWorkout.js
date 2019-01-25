const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompletedWorkoutSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  workout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'workouts',
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  user_name: {
    type: String,
  },
});

module.exports = mongoose.model('completed_workouts', CompletedWorkoutSchema);