import style from "./TopBar.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/redux";
import { ROUTES } from "./../../routes";
import { FC } from "react";

export const TopBar: FC = () => {
  const userData = useSelector((state: RootState) => state.auth.data);

  return (
    <div className={style.topbar}>
      <div className={style.leftSide}>
        <Link to="/subjects" className={style.topbarPart}>
          Разделы
        </Link>
        <Link to="/" className={style.topbarPart}>
          Главная
        </Link>
      </div>
      {userData.user ? (
        <div className={style.leftSide}>
          {userData.user.isAdmin && (
            <Link to={ROUTES.AdminPage} className={style.topbarPart}>
              Панель администратора
            </Link>
          )}
          <Link to={ROUTES.MyProfile} className={style.topbarPart}>
            {userData.user?.fullName}
          </Link>
          <Link to={ROUTES.logout} className={style.topbarPart}>
            Логаут
          </Link>
        </div>
      ) : (
        <div className={style.leftSide}>
          <Link to={ROUTES.login} className={style.topbarPart}>
            Логин
          </Link>
          <Link to={ROUTES.register} className={style.topbarPart}>
            Регистрация
          </Link>
        </div>
      )}
    </div>
  );
};
