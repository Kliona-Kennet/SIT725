const Project = require("../models/Model");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error in retrieving projects", error });
  }
};