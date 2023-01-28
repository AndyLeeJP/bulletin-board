import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./features/Post";

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [content, setContent] = useState("");
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );
    setName("");
    setContent("");
  };

  return (
    <div className="App">
      <div>
        <h1>React-redux post board</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="detail"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>Post</button>
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
