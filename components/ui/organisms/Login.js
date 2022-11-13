import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function Login() {
  function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <form className="flex space-x-2" onSubmit={handleLogin}>
      <div className="input-box">
        <Input id={`user`} type={`text`} placeholder={`Set username`} />
      </div>
      <Button type={`submit`}>login</Button>
    </form>
  );
}
