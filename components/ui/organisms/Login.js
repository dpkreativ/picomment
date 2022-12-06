import { useDispatch } from 'react-redux';
import { setAuthState, setAuthUser } from '../../../store/slices/authSlice';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function Login() {
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();
    dispatch(setAuthState(true));
    dispatch(setAuthUser(e.target.user.value));
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
