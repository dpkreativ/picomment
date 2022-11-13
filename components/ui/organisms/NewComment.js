import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function NewComment() {
  const user = 'John Doe';

  function handleNewComment(e) {
    e.preventDefault();
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
        <Button>logout</Button>
      </div>
    </section>
  );
}
