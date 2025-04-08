const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Project1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model("Project", ProjectSchema);

const sampleProject = new Project({
  title: "Revlon",
  image: "public/images/revlon.png",
  link: "Create a more liberated beauty",
  description: " One that embodied action, independence, inspiration and purpose.",
});
sampleProject.save().then(() => console.log("Project saved!"));