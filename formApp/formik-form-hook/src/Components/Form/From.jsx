import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const From = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.string().required(),
    password: yup.string().min(5).max(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref("passowrd"), null]),
  });

  const { register, handleSubmit, errors } = useForm({
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
            //   ref={register}
            />
            {/* <p>{errors?.firstName?.message}</p> */}
            {/* <input
              type="text"
              name="lastName"
              placeholder="Lasr Name ..."
              ref={register}
            />
            <p>{errors?.lastName?.message}</p> */}
            {/* <input
              type="email"
              name="email"
              placeholder="Email ..."
              ref={register}
            />
            <p>{errors?.email?.message}</p> */}
            {/* <input
              type="text"
              name="age"
              placeholder="Age ..."
              ref={register}
            />
            <p>{errors?.age?.message}</p> */}
            {/* <input
              type="password"
              name="password"
              placeholder="Password ..."
              ref={register}
            />
            <p>{errors?.password?.message}</p> */}
            {/* <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password ..."
              ref={register}
            />
            <p>{errors?.password && "Passwords must match"}</p> */}
            {/* <input type="submit" id="submit" ref={register} /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default From;
