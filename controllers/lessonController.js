const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {
  res.status(201).json(await Lesson.create(req.body));
};

exports.getLessons = async (_, res) => {
  res.json(await Lesson.find());
};

exports.getLesson = async (req, res) => {
  res.json(await Lesson.findById(req.params.id));
};

exports.updateLesson = async (req, res) => {
  res.json(await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deleteLesson = async (req, res) => {
  await Lesson.findByIdAndDelete(req.params.id);
  res.json({ message: "Lesson deleted" });
};
