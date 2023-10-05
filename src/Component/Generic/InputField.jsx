import clsx from "clsx";
import ErrorLabel from "./ErrorLabel";
export default function InputField({
  type = "text",
  register,
  validate = {},
  name = "name",
  className = "",
  multiline = false,
  errors = false,
}) {
  if (name == "bio") {
    console.log(validate);
  }
  return (
    <>
      {multiline ? (
        <textarea
          type={type}
          name={name}
          id={name}
          className={clsx(className, "border border-slate-300 rounded w-full")}
          {...register(name, validate)}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          className={clsx(className, "border border-slate-300 rounded w-full")}
          {...register(name, validate)}
        />
      )}
      <ErrorLabel errors={errors} name={name} />
    </>
  );
}
