const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const ctrl = require("../controllers/lessonController");

router.post("/", auth, ctrl.createLesson);
router.get("/", ctrl.getLessons);
router.get("/:id", ctrl.getLesson);
router.put("/:id", auth, ctrl.updateLesson);
router.delete("/:id", auth, ctrl.deleteLesson);

module.exports = router;
