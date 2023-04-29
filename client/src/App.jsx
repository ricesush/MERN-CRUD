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

  const [updatePostForm, setUpdatePostForm] = useState({
    _id: null,
    author: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get('http://localhost:3000/post');
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
      const post = await axios.post(
        'http://localhost:3000/post',
        createPostForm
      );
    } catch (error) {
      console.log(error);
    }

    getPosts();
  };

  const updatePostFormHandler = (e) => {
    const { name, value } = e.target;

    setUpdatePostForm({
      ...updatePostForm,
      [name]: value,
    });
  };

  const updatePost = async (e) => {
    e.preventDefault();
    const post = await axios.put(
      `${API_URL}/${updatePostForm._id}`,
      updatePostForm
    );

    getPosts();
    setUpdatePostForm({
      _id: null,
      author: '',
      title: '',
      content: '',
    });
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
        <h3>Update Post</h3>
        <form onSubmit={updatePost}>
          <label htmlFor='author'>Author: </label>
          <input
            type='text'
            id='author'
            name='author'
            onChange={updatePostFormHandler}
            value={updatePostForm.author}
          />
          <br /> <br />
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            name='title'
            onChange={updatePostFormHandler}
            value={updatePostForm.title}
          />
          <br /> <br />
          <textarea
            name='content'
            id='contentField'
            cols='30'
            rows='3'
            onChange={updatePostFormHandler}
            value={updatePostForm.content}
          ></textarea>
          <br />
          <button type='submit'>Update Post</button>
        </form>
      </section>
      <section>
        <h2>Posts</h2>
        {posts?.map((post) => {
          return (
            <div key={post._id}>
              <div>Author: {post.author}</div>
              <div>Title: {post.title}</div>
              <p>{post.content}</p>
              <button type='button' onClick={() => setUpdatePostForm(post)}>
                Edit
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
