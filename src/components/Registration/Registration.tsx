import { useDispatch } from "react-redux";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./Registration.scss";
import { registerSlice } from "../../store/redux/auth";
import { useForm } from "react-hook-form";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      avatarUrl: "",
      password: "",
    },
  });
  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Имейл</div>
      <input
        {...register("email", { required: "Укажите почту" })}
        name="email"
      />
      {errors.email && <div>{errors.email?.message}</div>}
      <div>Имя</div>
      <input name="fullName" />
      <div>Аватар</div>
      <input name="avatarUrl" />
      <div>Пароль</div>
      <input
        {...register("password", { required: "Укажите пароль" })}
        name="password"
      />
      {errors.password && <div>{errors.password?.message}</div>}
      <button type="submit">войти</button>
    </form>
  );
};
