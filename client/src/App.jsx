import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const API_URL = 'http://localhost:3000/post';
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data.posts);
  };

  return (
    <>
      <section>
        <h2>Posts</h2>
        {posts?.map((post) => {
          return (
            <div>
              <div>Author: {post.author}</div>
              <div>Title: {post.title}</div>
              <p>{post.content}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
