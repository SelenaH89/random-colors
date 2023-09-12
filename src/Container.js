export default function Container(props) {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: props.background,
        padding: '10px',
        display: 'flex',
      }}
    >
      {props.text}
    </div>
  );
}
