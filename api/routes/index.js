var express = require("express");
var app = express();

const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const filePath = "../../store/initial_data.json";
const initialData = require(filePath);

app.use(bodyParser.json());

// on the request to root (localhost:3000/)
app.get("/", function(req, res) {
  res.send("<b>My</b> first express http server");
});

// on the request to root (localhost:3000/)
app.get("/posts", function(req, res) {
  res.json({
    posts: initialData
  });
});

app.post("/posts", function(req, res) {
  const data = req.body;
  initialData.posts.push(data);
  console.log("Sending Data to Client");
  fs.writeFile(
    path.join(__dirname, filePath),
    JSON.stringify(initialData, null, 2),
    err => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json("File successfully Updated");
    }
  );
});

app.patch("/posts/:id", function(req, res) {
  const id = req.params.id;
  const postData = req.body;
  const index = initialData.posts.findIndex(post => post._id === postData._id);
  if (index !== -1) {
    initialData.posts[index] = postData;
    fs.writeFile(
      path.join(__dirname, filePath),
      JSON.stringify(initialData, null, 2),
      err => {
        if (err) {
          return res.status(422).send(err);
        }

        return res.json({
          posts: "Post Updated"
        });
      }
    );
  } else {
    res.status(422).json({
      posts: "Post cannot be updated"
    });
  }
});

app.delete("/posts/:id", function(req, res) {
  const id = req.params.id;
  console.log("id is : ", id);
  const index = initialData.posts.findIndex(post => post._id === id);
  if (index !== -1) {
    initialData.posts.splice(index, 1);
    console.log("Delete post indexOf", index);
    fs.writeFile(
      path.join(__dirname, filePath),
      JSON.stringify(initialData, null, 2),
      err => {
        if (err) {
          return res.status(422).send(err);
        }

        return res.json({
          posts: "post deleted"
        });
      }
    );
  } else {
    res.status(422).json({
      posts: "Post cannot be deleted"
    });
  }
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
  res.status(404).json({
    error: {
      status: 404,
      message: "No Resource here"
    }
  });
});

module.exports = {
  path: "/api",
  handler: app
};
