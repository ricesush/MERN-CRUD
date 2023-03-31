import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // States
  const [posts, setPosts] = useState(null);
  const [createForm, setCreateForm] = useState({
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

  return (
    <div className='App'>
      <section>
        <h2>Posts:</h2>
        {posts?.map((post) => {
          return (
            <div key={post._id}>
              <div>Title: {post.title}</div>
              <div>Content: {post.content}</div>
              <button onClick={() => deletePost(post._id)}>Delete Post</button>
            </div>
          );
        })}
      </section>

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
    </div>
  );
}

export default App;
