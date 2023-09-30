import clsx from "clsx";
export default function Grid({
  container = false,
  gap = 10,
  space = 1,
  children,
  classes = "",
}) {
  return (
    <div
      className={clsx(
        container && "grid grid-cols-12 mt-3",
        space == 4 && "col-span-4",
        space == 6 && "col-span-6",
        gap == 10 && "gap-10",
        classes
      )}
    >
      {children}
    </div>
  );
}
