const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", lessonSchema);
