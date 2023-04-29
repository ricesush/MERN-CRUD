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

    console.log(res.data.posts);
    // setPosts(posts.data.posts);
  };

  return (
    <>
      <section>
        <h2>Posts</h2>
        {posts?.map((post) => {
          return (
            <>
              <div>{post.author}</div>
              <div>{post.title}</div>
              <div>{post.content}</div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default App;
