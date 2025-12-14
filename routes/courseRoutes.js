const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const ctrl = require("../controllers/courseController");

router.post("/", auth, ctrl.createCourse);
router.get("/", ctrl.getCourses);
router.get("/:id", ctrl.getCourse);
router.put("/:id", auth, ctrl.updateCourse);
router.delete("/:id", auth, ctrl.deleteCourse);

module.exports = router;
