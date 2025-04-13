const express = require("express");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/Routes");

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

app.use("/api", projectRoutes);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});