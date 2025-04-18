const axios = require("axios");

const body = {
  email: "sanchit.gla_cs22@gla.ac.in",
  name: "sanchit",
  rollNo: "2215001571",
  accessCode: process.env.access_code,
  clientID: process.env.client_id,
  clientSecret: process.env.client_secret,
};

let authToken;
const auth = async () => {
  authToken = await axios.post(
    "http://20.244.56.144/evaluation-service/auth",
    body
  );
};
setInterval(() => {
  auth();
}, 50000000);

module.exports.users = async (req, res) => {
  let users;
  const getUsers = async () => {
    users = await axios.get("http://20.244.56.144/evaluation-service/users", {
      headers: {
        Authorization: authToken,
      },
    });
  };
  getUsers();
  res.json(users);
};

module.exports.posts = async (req, res) => {
  const { userid } = req.params;
  let posts;
  const getPosts = async () => {
    posts = await axios.get(
      `http://20.244.56.144/evaluation-service/users/${userid}/posts`,
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
  };
  getPosts();
  res.json(posts);
};

module.exports.comments = async (req, res) => {
  const { postid } = req.params;
  let comments;
  const getComments = async () => {
    comments = await axios.get(
      `http://20.244.56.144/evaluation-service/posts/${postid}/comments`,
      { headers: authToken }
    );
  };
  getComments();
  res.json(comments);
};
