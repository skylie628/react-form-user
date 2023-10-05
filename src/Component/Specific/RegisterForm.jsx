import { useForm } from "react-hook-form";
import Button from "../Generic/Button";
import Checkbox from "../Generic/Checkbox";
import Typography from "../Generic/Typography";
import ErrorLabel from "../Generic/ErrorLabel";
import RadioGroup from "../Generic/RadioGroup";
import InputField from "../Generic/InputField";
import Select from "../Generic/Select";
import Form from "../Generic/Form";
import Grid from "../Generic/Grid";
import InputLabel from "../Generic/InputLabel";
export default function RegisterForm() {
  const {
    register,
    trigger,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //const [data, setData] = useState("");
  const validateSchema = {
    name: {
      required: "This is required.",
      maxLength: {
        value: 50,
        message: "Reach maxium length",
      },
      minLength: {
        value: 2,
        message: "Reach minimum length",
      },
    },
    policy: {
      validate: (checked) => checked || "Must agree with policy",
    },
    email: {
      required: "This is required.",
      maxLength: {
        value: 50,
        message: "Reach maxium length",
      },
      minLength: {
        value: 2,
        message: "Reach minimum length",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    password: {
      required: "This is required.",
      maxLength: {
        value: 40,
        message: "Reach maxium length",
      },
      minLength: {
        value: 6,
        message: "Password length minimum is 6",
      },
    },
    bio: {
      required: "This is required.",
      maxLength: {
        value: 1000,
        message: "Reach maxium length",
      },
      minLength: {
        value: 1,
        message: "Reach minimum length",
      },
    },
    confirmPassword: {
      required: "This is required.",
      maxLength: {
        value: 40,
        message: "Reach maxium length",
      },
      minLength: {
        value: 6,
        message: "Password length minimum is 6",
      },
      validate: (value) =>
        value === watch("password") || "Passwords do not match",
    },
  };

  const handleRegisterSubmit = (data) => {
    let s = "";
    for (const key in data) {
      s += `${key}: ${data[key]}, `;
    }
    alert(s);
  };
  const radioOptions = [
    {
      value: "male",
      label: "Male",
      checked: true,
    },
    {
      value: "female",
      label: "Female",
    },
  ];
  const selectOptions = [
    { value: "pending", label: "pending" },
    { value: "complete", label: "complete" },
  ];

  return (
    <div className="w-6/12 rounded border border-slate-200 ">
      <div className="p-3 rounded-t h-10 bg-stone-800 flex justify-start items-center">
        <Typography classes="text-white">Register</Typography>
      </div>
      <Form classes="m-4">
        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Name" htmlFor="name" />
          </Grid>
          <Grid space={6} classes="text-left">
            <InputField
              type="text"
              register={register}
              validate={validateSchema.name}
              name="name"
              errors={errors}
            />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Gender" />
          </Grid>
          <Grid space={6} classes="mr-auto text-left">
            <RadioGroup
              name="gender"
              options={radioOptions}
              className="border border-slate-300 rounded mr-3"
              register={register}
            />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Bio" htmlFor="bio" />
          </Grid>
          <Grid space={6} classes="text-left">
            <InputField
              multiline
              register={register}
              validate={validateSchema.bio}
              errors={errors}
              name="bio"
            />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Policy" htmlFor="policy" />
          </Grid>
          <Grid space={6} classes="text-left">
            <Checkbox
              register={register}
              validate={validateSchema.policy}
              name="policy"
              label={"total agree!"}
            />
            <br />
            <ErrorLabel errors={errors} name="policy" />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Email" htmlFor="email" />
          </Grid>
          <Grid space={6} classes="text-left">
            <InputField
              type="email"
              register={register}
              validate={validateSchema.email}
              name="email"
              errors={errors}
            />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Status" htmlFor="status" />
          </Grid>
          <Grid space={6} classes="text-left">
            <Select
              name="status"
              register={register}
              className="border border-slate-300 rounded w-3/6"
              options={selectOptions}
            />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Password" htmlFor="password" />
          </Grid>
          <Grid space={6} classes="text-left">
            <InputField
              type="password"
              register={register}
              validate={validateSchema.password}
              name="password"
              errors={errors}
            />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Confirm Password" htmlFor="confirmPassword" />
          </Grid>
          <Grid space={6} classes="text-left">
            <InputField
              type="password"
              register={register}
              validate={validateSchema.confirmPassword}
              name="confirmPassword"
              errors={errors}
            />
          </Grid>
        </Grid>
        <div className="mt-5">
          <Button
            type="button"
            classes=" mr-5"
            color="white"
            onClick={handleSubmit(handleRegisterSubmit)}
          >
            Submit
          </Button>
          <Button
            type="button"
            color="black"
            onClick={() =>
              trigger([
                "name",
                "bio",
                "gender",
                "policy",
                "email",
                "password",
                "confirmPassword",
              ])
            }
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}
