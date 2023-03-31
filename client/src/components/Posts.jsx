export function Posts(props) {
  return (
    <div className='card' style={{ width: 250 }}>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.content}</p>
        <button onClick={props.onDelete}>Delete Post</button>
        <button onClick={props.onUpdate}>Update Post</button>
      </div>
    </div>
  );
}
