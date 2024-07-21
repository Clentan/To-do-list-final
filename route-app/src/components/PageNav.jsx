import { NavLink } from "react-router-dom";
import Styles from "./PageNav.module.css"
import Logo from "./—Pngtree—christmas tree icon_3570199.jpg"



export default function PageNav() {
  return (
    <nav className={Styles.nav}>
      <div>< img src={Logo} alt='Logo'/> </div>
      <ul >
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Registration">Registration</NavLink>
        </li>
      
      </ul>
      <h1>&#9776;</h1>
    </nav>
  );
}
