import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const API = 'http://localhost:3000/posts';

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get(API);

    setPosts(res.data.posts);
    console.log(posts);
  };

  return (
    <div className='App'>
      {posts?.map((post) => {
        return (
          <div key={post._id}>
            <div>{post.author}</div>
            <div>{post.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
