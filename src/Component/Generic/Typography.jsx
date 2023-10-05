import clsx from "clsx";
export default function Typography({ children, classes, variant = "info" }) {
  return (
    <span className={clsx(variant == "error" && "text-red-600", classes)}>
      {children}
    </span>
  );
}
