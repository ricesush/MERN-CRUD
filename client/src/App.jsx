import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState(null);
  const [createPostForm, setCreatePostForm] = useState({
    author: '',
    content: '',
  });

  const [updatePostForm, setUpdatePostForm] = useState({
    _id: null,
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
    setCreatePostForm({
      author: '',
      content: '',
    });
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

  const updatePost = async (e) => {
    e.preventDefault();
    const post = await axios.put(
      `http://localhost:3000/posts/${updatePostForm._id}`,
      updatePostForm
    );

    fetchPosts();

    setUpdatePostForm({
      _id: null,
      author: '',
      content: '',
    });
  };

  const updatePostFormHandler = async (e) => {
    const { name, value } = e.target;

    setUpdatePostForm({
      ...updatePostForm,
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
            <button type='button' onClick={() => setUpdatePostForm(post)}>
              Edit
            </button>
            <br />
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

      <br />
      {updatePostForm._id && (
        <form onSubmit={updatePost}>
          <label htmlFor='author'>Author: </label>
          <input
            type='text'
            name='author'
            id='author'
            value={updatePostForm.author}
            onChange={updatePostFormHandler}
          />
          <br />
          <textarea
            name='content'
            id='content'
            cols='30'
            rows='3'
            value={updatePostForm.content}
            onChange={updatePostFormHandler}
          ></textarea>
          <br />
          <button type='submit'>Save</button>
        </form>
      )}
    </div>
  );
}

export default App;
