import Radio from "./Radio";
export default function RadioGroup({ options, name, register, className }) {
  return (
    <>
      {options.map(({ value, label, checked }) => (
        <>
          <Radio
            key={value}
            name={name}
            checked={checked}
            id={value}
            value={value}
            label={label}
            register={register}
            className={className}
          />
          <br />
        </>
      ))}
    </>
  );
}
