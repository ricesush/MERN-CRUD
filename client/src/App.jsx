import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Fetch the posts
    const res = await axios.get('http://localhost:3000/posts');
    setPosts(res.data.posts);
    // Set to state
    console.log(res);
  };

  return (
    <div className='App'>
      <section>
        <h2>Posts:</h2>
        {posts.map((post) => {
          return (
            <>
              <div>Title: {post.title}</div>
              <div>Content: {post.content}</div>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default App;
