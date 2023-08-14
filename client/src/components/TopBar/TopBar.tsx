import "./TopBar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/redux";
import { ROUTES } from "./../../routes";
import { FC } from "react";

export const TopBar: FC = () => {
  const userData = useSelector((state: RootState) => state.auth.data);

  return (
    <div className="topbar">
      <div className="leftSide">
        <Link to="/subjects" className="topbarPart">
          Разделы
        </Link>
        <Link to="/" className="topbarPart">
          Главная
        </Link>
      </div>
      {userData.user ? (
        <div className="leftSide">
          {userData.user.isAdmin && (
            <Link to={ROUTES.AdminPage} className="topbarPart">
              Панель администратора
            </Link>
          )}
          <Link to={ROUTES.MyProfile} className="topbarPart">
            {userData.user?.fullName}
          </Link>
          <Link to={ROUTES.logout} className="topbarPart">
            Логаут
          </Link>
        </div>
      ) : (
        <div className="leftSide">
          <Link to={ROUTES.login} className="topbarPart">
            Логин
          </Link>
          <Link to={ROUTES.register} className="topbarPart">
            Регистрация
          </Link>
        </div>
      )}
    </div>
  );
};
