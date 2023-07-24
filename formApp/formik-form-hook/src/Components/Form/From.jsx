import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const From = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.string().required(),
    password: yup.string().min(5).max(10).required(),
    confirmPassword: yup
    .string()
    .required("Please re-type your password")
    .oneOf([yup.ref("passowrd"), null],'The password must match!!'),
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="form">
        <div className="title">Sign Up</div>
        <div className="inputs">
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name ..."
              {...register("firstName")}
            />
            <p>{errors?.firstName?.message}</p>
            <input
              type="text"
              name="lastName"
              placeholder="Lasr Name ..."
              {...register("lastName")}
            />
            <p>{errors?.lastName?.message}</p>
            <input
              type="email"
              name="email"
              placeholder="Email ..."
              {...register("email")}
            />
            <p>{errors?.email?.message}</p>
            <input
              type="text"
              name="age"
              placeholder="Age ..."
              {...register("age")}
            />
            <p>{errors?.age?.message}</p>
            <input
              type="password"
              name="password"
              placeholder="Password ..."
              {...register("password")}
            />
            <p>{errors?.password?.message}</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password ..."
              {...register('confirmPassword')} 
            />
            <p>{errors?.confirmPassword?.message}</p>
            <input
              type="submit"
              id="submit"
              // ref={register}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default From;
