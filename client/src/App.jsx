import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const API_URL = 'http://localhost:3000/post';
  const [posts, setPosts] = useState(null);
  const [createPostForm, setCreatePostForm] = useState({
    author: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data.posts);
  };

  const createPostFormHandler = (e) => {
    const { name, value } = e.target;

    setCreatePostForm({
      ...createPostForm,
      [name]: value,
    });
  };

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const post = await axios.post(API_URL, createPostForm);
    } catch (error) {
      console.log(error);
    }

    getPosts();
  };

  return (
    <>
      <section>
        <h3>Create Post</h3>
        <form onSubmit={createPost}>
          <label htmlFor='author'>Author: </label>
          <input
            type='text'
            id='author'
            name='author'
            onChange={createPostFormHandler}
            value={createPostForm.author}
          />
          <br /> <br />
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            name='title'
            onChange={createPostFormHandler}
            value={createPostForm.title}
          />
          <br /> <br />
          <textarea
            name='content'
            id='contentField'
            cols='30'
            rows='3'
            onChange={createPostFormHandler}
            value={createPostForm.content}
          ></textarea>
          <br />
          <button type='submit'>Save Post</button>
        </form>
      </section>
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
