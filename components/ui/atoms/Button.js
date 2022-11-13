export default function Button({ children, onClick, type }) {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
