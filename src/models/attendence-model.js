const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["present", "absent"],
      default: "present",
      required: true,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Attendence", attendenceSchema);
