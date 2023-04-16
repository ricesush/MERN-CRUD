import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // fetching all the posts
    const res = await axios.get('http://localhost:3000/posts');

    console.log(res.data.posts);
    setPosts(res.data.posts);
  };

  return (
    <div className='App'>
      {posts?.map((post) => {
        return (
          <div key={post._id}>
            <div>Author: {post.author}</div>
            <div>{post.createdAt}</div>
            <div>{post.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
