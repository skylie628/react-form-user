import clsx from "clsx";
export default function Button({
  onClick,
  type = "Button",
  children,
  color,
  classes,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        color == "black" && "bg-stone-800 text-white",
        color == "white" && "border border-slate-200",
        classes
      )}
    >
      {children}
    </button>
  );
}
