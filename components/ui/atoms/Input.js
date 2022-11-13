export default function Input({ id, placeholder, type }) {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      name={id}
      id={id}
    />
  );
}
