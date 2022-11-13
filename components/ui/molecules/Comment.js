import Avatar from '../atoms/Avatar';

export default function Comment({ comment, username }) {
  return (
    <article className="flex space-x-2 my-2">
      <Avatar />
      <div className="comment">
        <div className="font-bold">{username}</div>
        <div>{comment}</div>
      </div>
    </article>
  );
}
