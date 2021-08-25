import { useState, useEffect } from "react";
import Logo from "../Logo.png";
import Avatar from "../Avatar.jpg";
import styles from "../styles/modules/Nav.module.css";

export default function Nav() {
  const [navTransparency, setNavTransparency] = useState(true);

  const setState = () => {
    window.pageYOffset > 0
      ? setNavTransparency(false)
      : setNavTransparency(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", setState);

    return () => window.removeEventListener("scroll", setState);
  }, []);

  return (
    <div className={`${styles.nav} ${!navTransparency && styles.nav_black}`}>
      <div className={styles.navContents}>
        <img className={styles.logo} src={Logo} alt="New Netflix logo 2021" />
        <img className={styles.avatar} src={Avatar} alt="Profile avatar" />
      </div>
    </div>
  );
}
