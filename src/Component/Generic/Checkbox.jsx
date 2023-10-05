export default function Checkbox({
  name,
  label,
  register,
  validate,
  className,
}) {
  return (
    <>
      <input
        type="checkbox"
        {...register(name, validate)}
        id={name}
        name={name}
        className={className}
      />
      <span className="ml-1">{label}</span>
    </>
  );
}
