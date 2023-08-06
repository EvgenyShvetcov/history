import "./TopBar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/redux";

export const TopBar = () => {
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
          <div className="topbarPart">{userData.user?.fullName}</div>
          <Link to="/logout" className="topbarPart">
            Логаут
          </Link>
        </div>
      ) : (
        <div className="leftSide">
          <Link to="/login" className="topbarPart">
            Логин
          </Link>
          <Link to="/register" className="topbarPart">
            Регистрация
          </Link>
        </div>
      )}
    </div>
  );
};
