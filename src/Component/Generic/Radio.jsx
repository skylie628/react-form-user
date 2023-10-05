import InputLabel from "./InputLabel";
export default function Radio({
  name = "default",
  value = "0",
  checked = false,
  label = false,
  className,
  register,
}) {
  console.log(name, value, register);
  return (
    <>
      {checked ? (
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          checked
          className={className}
          {...register(name)}
        />
      ) : (
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          className={className}
          {...register(name)}
        />
      )}
      {label && <InputLabel text={label} htmlFor={value} />}
    </>
  );
}
