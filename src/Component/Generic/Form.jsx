export default function Form({ children, classes, onSubmit }) {
  return (
    <form className={classes} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
