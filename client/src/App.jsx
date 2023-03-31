import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // States
  const [posts, setPosts] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: '',
    content: '',
  });
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: '',
    content: '',
  });

  // Effects
  useEffect(() => {
    fetchPosts();
  }, []);

  // Functions
  const fetchPosts = async () => {
    // Fetch the posts
    const res = await axios.get('http://localhost:3000/posts');
    setPosts(res.data.posts);
    // Set to state
    console.log(res);
  };
  const updateFormHandler = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };
  const createPost = async (e) => {
    e.preventDefault();

    // Create a post
    const res = await axios.post('http://localhost:3000/posts', createForm);

    // Update state

    if (createForm.title != '' && createForm.content != '') {
      setPosts([...posts, res.data.post]);
    } else {
      return console.log('Cant submit empty fields');
    }

    // Hiding create post form
    setShowCreatePostForm(false);
    // clear form state
    setCreateForm({ title: '', content: '' });
  };
  const deletePost = async (_id) => {
    // Delete the post
    const res = await axios.delete(`http://localhost:3000/posts/${_id}`);

    // update State
    const newPosts = [...posts].filter((post) => {
      return post._id !== _id;
    });

    setPosts(newPosts);
  };

  const updateFormFieldChangeHandler = (e) => {
    const { name, value } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const onUpdatePost = (post) => {
    // Set state on update form
    setUpdateForm({
      title: post.title,
      content: post.content,
      _id: post._id,
    });
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const { title, content } = updateForm;
    // Send the update request
    const res = await axios.put(
      `http://localhost:3000/posts/${updateForm._id}`,
      {
        title,
        content,
      }
    );

    const newPosts = [...posts];
    const postIndex = posts.findIndex((post) => {
      return post._id === updateForm._id;
    });

    newPosts[postIndex] = res.data.post;

    setPosts(newPosts);
    setUpdateForm({
      _id: null,
      title: '',
      content: '',
    });
  };

  return (
    <div className='App'>
      <button onClick={() => setShowCreatePostForm(true)}>+ Post</button>
      <section>
        <h2>Posts:</h2>
        {posts?.map((post) => {
          return (
            <div key={post._id}>
              <div>Title: {post.title}</div>
              <div>Content: {post.content}</div>
              <button onClick={() => deletePost(post._id)}>Delete Post</button>
              <button onClick={() => onUpdatePost(post)}>Update Post</button>
            </div>
          );
        })}
      </section>

      {updateForm._id && (
        <section>
          <h2>Update Post</h2>
          <form onSubmit={updatePost}>
            <input
              onChange={updateFormFieldChangeHandler}
              value={updateForm.title}
              name='title'
            />
            <textarea
              onChange={updateFormFieldChangeHandler}
              value={updateForm.content}
              name='content'
              cols='30'
              rows='10'
            />
            <button type='submit'>Save</button>
          </form>
        </section>
      )}

      {showCreatePostForm && (
        <section>
          <h2>Create Note</h2>
          <form onSubmit={createPost}>
            <input
              onChange={updateFormHandler}
              value={createForm.title}
              type='text'
              name='title'
            />
            <textarea
              onChange={updateFormHandler}
              value={createForm.content}
              name='content'
              id=''
              cols='30'
              rows='10'
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default App;
