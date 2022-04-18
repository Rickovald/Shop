import s from "./user.module.sass";
import { observer } from "mobx-react-lite";

const User = observer(() => {
  return (
    <div className={s.good}>
      хуй
    </div>
  );
});

export default User;
