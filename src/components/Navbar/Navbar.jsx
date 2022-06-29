import logo from "../../assets/logo.png";
import logoReduced from "../../assets/logo-reduced.png";
import styles from "./Navbar.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.Navbar}>
        <div className={styles.navLogoContent}>
          <img
            src={window.innerWidth <= 500 ? logoReduced : logo}
            alt="logo"
            className={styles.Logo}
          />
        </div>
        <div className={styles.navButtons}>
          <div className={styles.navButton}>HOME</div>
          <div className={styles.navButton}>WEBSITE</div>
            <ConnectButton accountStatus={{
    smallScreen: 'avatar',
    largeScreen: 'full',
  }}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
