export function UpdatePost(props) {
  return (
    <section>
      <h2>Update Post</h2>
      <form onSubmit={props.onSubmit}>
        <input
          onChange={props.onChangeHandler}
          value={props.titleValue}
          name='title'
        />
        <textarea
          onChange={props.onChangeHandler}
          value={props.textAreaValue}
          name='content'
          cols='30'
          rows='10'
        />
        <button type='submit'>Save</button>
        <button onClick={props.onCancel}>Cancel</button>
      </form>
    </section>
  );
}
