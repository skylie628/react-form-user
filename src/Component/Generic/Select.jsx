export default function Select({ name, options, register, className }) {
  return (
    <select name={name} {...register(name)} id={name} className={className}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
