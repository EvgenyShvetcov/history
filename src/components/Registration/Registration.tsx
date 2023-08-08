import { useDispatch } from "react-redux";
import "./Registration.scss";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { allApi } from "../../store/services/Services";
import { RegistrationState, UserState } from "../../interfaces";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthSlice } from "../../store/redux/auth";
import { ArrowBack } from "@mui/icons-material";
export const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser, fetchData] = allApi.useFetchRegisterMutation();

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
  const onSubmit = (values: RegistrationState) => {
    registerUser(values);
  };

  return (
    <div className="registration">
      <div className="IconLogin">
        <ArrowBack onClick={() => navigate(-1)} className="IconLogin" />
      </div>
      <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h3">Регистрация</Typography>
        <div className="textField">
          <TextField
            label="Имя пользователя"
            fullWidth
            helperText={errors.fullName && errors.password?.message}
            {...register("fullName", {
              required: "Укажите имя пользователя",
            })}
          />
        </div>{" "}
        <div className="textField">
          <TextField
            label="E-Mail"
            fullWidth
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
        </div>
        <div className="textField">
          <TextField
            label="Пароль"
            fullWidth
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
          />
        </div>
        <Button type="submit">войти</Button>
      </form>
    </div>
  );
};
