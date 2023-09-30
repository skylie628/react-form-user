export default function InputLabel({ text, xs, htmlFor, classes }) {
  return (
    <label htmlFor={htmlFor} style={xs} className={classes}>
      {text}
    </label>
  );
}
