const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //na use korle req.body indefined ashbe

app.get("/", (req, res) => {
  res.send("Look mama I can code node now");
});
const users = [
  { id: 1, name: "Shabana", email: "shabana@gmail.com", phone: "0178888888" },
  {
    id: 2,
    name: "Shuchorite",
    email: "shuchorite@gmail.com",
    phone: "0178888888",
  },
  { id: 3, name: "Sohana", email: "sohana@gmail.com", phone: "0178888888" },
  { id: 4, name: "Sabila", email: "sabila@gmail.com", phone: "0178888888" },
  { id: 5, name: "Sraboni", email: "sraboni@gmail.com", phone: "0178888888" },
  { id: 6, name: "Shuconda", email: "shuconda@gmail.com", phone: "0178888888" },
  { id: 7, name: "Srabonti", email: "srabonti@gmail.com", phone: "01788888" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((u) => u.name.toLowerCase().includes(search));
    res.send(matched);
  }
  console.log(req.query);
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);

  res.send(user);
});

app.listen(port, () => {
  console.log("listening from port", port);
});
