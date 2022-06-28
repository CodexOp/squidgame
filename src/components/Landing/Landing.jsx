import Navbar from "../Navbar/Navbar";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Navbar />
      <div className={styles.videoContainer}>
        <div className={styles.video}></div>
      </div>
    </div>
  );
};

export default Landing;
