import { allApi } from "../../store/services/Services";
import { useForm } from "react-hook-form";
import style from "./Login.module.scss";
import { UserLogin } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthSlice } from "../../store/redux/auth";
import { Button, TextField, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export const Login: FC = () => {
  const [login, fetchData] = allApi.useFetchLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isValidating },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (fetchData.isSuccess) {
      if (fetchData.data.token) {
        const { token, ...user } = fetchData.data;
        window.localStorage.setItem("token", token);
        dispatch(
          getAuthSlice.actions.getAuthData({
            user: user,
            isAuthenticated: true,
          })
        );
        navigate("/");
      } else throw console.error("ошибка");
    }
  }, [fetchData.isSuccess, dispatch]);

  const onSubmit = (values: UserLogin) => {
    login(values);
  };

  return (
    <div className={style.login}>
      <div className={style.IconLogin}>
        <ArrowBack onClick={() => navigate(-1)} className={style.IconLogin} />
      </div>
      <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h3">Вход в аккаунт</Typography>
        <div className={style.textField}>
          <TextField
            label="E-Mail"
            fullWidth
            type="email"
            helperText={
              (errors.email &&
                errors.email.type === "pattern" &&
                "Некорректный формат email") ||
              errors.email?.message
            }
            {...register("email", {
              required: "Укажите почту",
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />{" "}
        </div>{" "}
        <div className={style.textField}>
          <TextField
            label="Пароль"
            fullWidth
            type="password"
            helperText={
              (errors.password &&
                errors.password.type === "minLength" &&
                "Слишком короткий пароль.") ||
              errors.password?.message
            }
            {...register("password", {
              required: "Укажите пароль",
              minLength: 5,
            })}
          />{" "}
        </div>
        <Button type="submit">войти</Button>
      </form>
    </div>
  );
};
