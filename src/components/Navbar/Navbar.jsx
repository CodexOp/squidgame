import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.Navbar}>
        <div className={styles.navLogoContent}>
          <img src={logo} alt="logo" className={styles.Logo} />
        </div>
        <div className={styles.navButtons}>
          <div className={styles.navButton}>HOME</div>
          <div className={styles.navButton}>WEBSITE</div>
          <div className={`${styles.connectButton} ${styles.navButton}`}>
            CONNECT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
