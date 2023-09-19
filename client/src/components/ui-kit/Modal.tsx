import style from "./Modal.module.scss";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  children: React.ReactNode;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<Props> = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
