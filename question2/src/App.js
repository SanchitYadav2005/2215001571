import axios from "axios";
import "./App.css";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

function App() {
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    const userPosts = await axios.get(
      `http://localhost:5000/users/:userid/posts`
    );
    const post = JSON.stringify(userPosts.data);
    setPosts(post);
  };
  getPosts();

  const [comments, setComments] = useState();
  const getComments = async () => {
    const postId = posts.id;
    const userComments = await axios.get(
      `http://localhost:5000/posts/${postId}/comments`
    );
    const comment = JSON.stringify(userComments.data);
    setComments(comment);
  };
  getComments();
  return posts.map((post) => () => {
    <Card>
      <ul>
        <CardHeader className="list-item">
          <span>Id:-</span>
          {post.id}
        </CardHeader>
        <CardContent className="list-item">{post.content}</CardContent>
        <CardContent className="list-item">{comments.comment}</CardContent>
      </ul>
    </Card>;
  });
}

export default App;