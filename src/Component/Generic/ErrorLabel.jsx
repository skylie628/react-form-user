import { ErrorMessage } from "@hookform/error-message";
import Typography from "./Typography";
export default function ErrorLabel({ errors, name }) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <Typography variant="error" classes="mr-auto">
          {message}
        </Typography>
      )}
    />
  );
}
