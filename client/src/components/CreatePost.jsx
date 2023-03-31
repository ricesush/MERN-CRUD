export function CreatePost(props) {
  return (
    <section>
      <h2>Create Note</h2>
      <form onSubmit={props.onCreatePost}>
        <input
          onChange={props.onInputChange}
          value={props.titleValue}
          type='text'
          name='title'
        />
        <textarea
          onChange={props.onInputChange}
          value={props.contentValue}
          name='content'
          id=''
          cols='30'
          rows='10'
        ></textarea>
        <button type='submit'>Submit</button>
        <button onClick={props.onCancel}>Cancel</button>
      </form>
    </section>
  );
}
