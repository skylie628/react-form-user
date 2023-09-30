import Typography from "../Generic/Typography";
import Form from "../Generic/Form";
import Grid from "../Generic/Grid";
import InputLabel from "../Generic/InputLabel";
export default function RegisterForm() {
  return (
    <div className="w-6/12 rounded border border-slate-200">
      <div className="p-3 rounded-t h-10 bg-stone-800 flex justify-start items-center">
        <Typography className="text-white">Register</Typography>
      </div>
      <Form classes="m-4">
        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Name" htmlFor="name" />
          </Grid>
          <Grid space={6}>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-slate-300 rounded w-full"
            ></input>
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Gender" />
          </Grid>
          <Grid space={6} classes="mr-auto">
            <InputLabel text="Male" htmlFor="male" />
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              className="border border-slate-300 rounded mr-3"
            />

            <InputLabel text="Female" htmlFor="female" />
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              className="border border-slate-300 rounded"
            />
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Bio" htmlFor="bio" />
          </Grid>
          <Grid space={6}>
            <textarea
              type="text"
              id="bio"
              name="bio"
              className="border border-slate-300 rounded w-full"
            ></textarea>
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Policy" htmlFor="policy" />
          </Grid>
          <Grid space={6} classes="mr-auto">
            <input type="checkbox" id="policy" name="policy" />
            <span> total agree!</span>
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Email" htmlFor="email" />
          </Grid>
          <Grid space={6}>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-slate-300 rounded w-full"
            ></input>
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Status" htmlFor="status" />
          </Grid>
          <Grid space={6} classes="text-left">
            <select
              name="status"
              id="status"
              className="border border-slate-300 rounded w-3/6"
            >
              <option value="pending">pending</option>
              <option value="complete">complete</option>
            </select>
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Password" htmlFor="password" />
          </Grid>
          <Grid space={6}>
            <input
              type="password"
              name="password"
              id="password"
              className="border border-slate-300 rounded w-full"
            ></input>
          </Grid>
        </Grid>

        <Grid container gap={10}>
          <Grid space={4} classes="text-right">
            <InputLabel text="Confirm Password" htmlFor="confirmPassword" />
          </Grid>
          <Grid space={6}>
            <input
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              className="border border-slate-300 rounded w-full"
            ></input>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
