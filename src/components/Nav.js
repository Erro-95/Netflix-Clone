import React from "react";
import Logo from "../Logo.png";
import styles from "../styles/modules/Nav.module.css";

export default function Nav() {
  return (
    <div>
      <img className={styles.logo} src={Logo} alt="New Netflix logo 2021" />
      <img src="" alt="" />
    </div>
  );
}
