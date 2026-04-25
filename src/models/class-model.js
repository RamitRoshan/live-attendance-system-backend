const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
    trim: true,
  },
  teacherId: {
    // ObjectId is MongoDB's unique identifier type
    // We use it here to store a reference to a User document
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // tells Mongoose this ID belongs to the User collection
    required: true,
  },
  studentIds: [
    {
      // stores the ID of another document (like a User)
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});
 
