const express = require("express");
const router = express.Router();
const projectController = require("../controllers/Controller");

router.get("/projects", projectController.getAllProjects);

module.exports = router;