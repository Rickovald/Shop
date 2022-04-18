import s from "./nav.module.sass"
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={s.nav}>
            <NavLink className={s.nav__link} to={"/"}>
                main
            </NavLink>
            <NavLink className={s.nav__link} to={"/goods"}>
                goods
            </NavLink>
            <NavLink className={s.nav__link} to={"/user"}>
                user
            </NavLink>
        </div> 
    )

}

export default Navigation