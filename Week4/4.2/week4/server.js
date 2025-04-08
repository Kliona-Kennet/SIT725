var express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/Project1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("project connected");
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model("Project", ProjectSchema);

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find({});
  res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, () =>
  console.log(`App listening to: http://localhost:${port} `)
);