// backend.js
import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

// Sample in-memory data
const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor"
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer"
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor"
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress"
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender"
    }
  ]
};

// GET base route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Helper functions
const findUserByName = (name) => {
  return users["users_list"].filter(user => user.name === name);
};

const findUsersByNameAndJob = (name, job) => {
  return users["users_list"].filter(
    user => user.name === name && user.job === job
  );
};

const findUserById = (id) => {
  return users["users_list"].find(user => user.id === id);
};

const addUser = (user) => {
  users["users_list"].push(user);
  return user;
};

const deleteUserById = (id) => {
  const index = users["users_list"].findIndex(user => user.id === id);
  if (index !== -1) {
    users["users_list"].splice(index, 1);
    return true;
  }
  return false;
};

// GET /users (with optional name and job filters)
app.get("/users", (req, res) => {
  const { name, job } = req.query;

  let result = users["users_list"];

  if (name && job) {
    result = findUsersByNameAndJob(name, job);
  } else if (name) {
    result = findUserByName(name);
  }

  res.send({ users_list: result });
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const result = findUserById(id);

  if (result === undefined) {
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);
  }
});

// POST /users
app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd);
  res.status(201).send();
});

// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const deleted = deleteUserById(id);

  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).send("User not found");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

