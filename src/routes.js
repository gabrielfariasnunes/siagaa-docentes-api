const router = require("express").Router();
const { searchTeacherController } = require("#controllers");

router.use("/pesquisar:nome", searchTeacherController);

module.exports = router;
