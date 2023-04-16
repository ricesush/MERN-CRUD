import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState(null);
  const [createPostForm, setCreatePostForm] = useState({
    author: '',
    content: '',
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // fetching all the posts
    const res = await axios.get('http://localhost:3000/posts');

    console.log(res.data.posts);
    setPosts(res.data.posts);
  };

  const createPost = async (e) => {
    e.preventDefault();
    // creating the post
    const post = await axios.post(
      'http://localhost:3000/posts',
      createPostForm
    );

    fetchPosts();
  };

  const createPostHandler = async (e) => {
    // destructuring the data
    const { name, value } = e.target;

    // updating the state createPostForm
    setCreatePostForm({
      ...createPostForm,
      [name]: value,
    });
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
      <br />
      <form onSubmit={createPost}>
        <label htmlFor='author'>Author: </label>
        <input
          type='text'
          id='author'
          name='author'
          onChange={createPostHandler}
          value={createPostForm.author}
        />
        <br />
        <textarea
          name='content'
          id='content'
          cols='30'
          rows='3'
          onChange={createPostHandler}
          value={createPostForm.content}
        ></textarea>
        <br />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

export default App;
