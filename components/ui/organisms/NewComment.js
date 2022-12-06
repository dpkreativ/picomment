import { useDispatch, useSelector } from 'react-redux'; //updated
import { selectAuthUser, setAuthState } from '../../../store/slices/authSlice'; // updated
import { addComment } from '../../../store/slices/commentSlice'; // updated
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function NewComment() {
  const dispatch = useDispatch(); // updated
  const user = useSelector(selectAuthUser); // updated

  // Updated function
  function handleNewComment(e) {
    e.preventDefault();
    dispatch(
      addComment({
        comment: e.target.comment.value,
        username: user,
      })
    );
    e.target.comment.value = '';
  }

  return (
    <section>
      <form
        className="flex space-x-2 items-center h-full"
        onSubmit={handleNewComment}
      >
        <Avatar />
        <div className="input-box">
          <Input
            id={`comment`}
            type={`text`}
            placeholder={`${user}'s comment`}
          />
        </div>
        <Button type={`submit`}>send</Button>
      </form>
      <div className="py-2">
        <Button onClick={() => dispatch(setAuthState(false))}>logout</Button>
      </div>
    </section>
  );
}
