const router = require("express").Router();
const ctrl = require("../controllers/userController");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.get("/", ctrl.getUsers);
router.get("/:id", ctrl.getUser);
router.put("/:id", ctrl.updateUser);
router.delete("/:id", ctrl.deleteUser);

module.exports = router;
