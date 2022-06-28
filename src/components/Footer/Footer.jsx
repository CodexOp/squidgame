import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.about}>
          <img className={styles.footerLogo} src={logo} alt="logo" />
          <div className={styles.description}>
            500 Nft collection, 0.3 each.Minting a Chimpstronaut NFT will allow
            you to stake it and receive Secondary Token for each P2E Game FT on
            it500 Nft collection, 0.3 each.Minting a Chimpstronaut NFT will
            allow you to stake it
          </div>
        </div>
        <div className={styles.links}>
          <h2 className={styles.footerHeader}>Links</h2>
          <p className={styles.link}>Project</p>
          <p className={styles.link}>Tokenomics</p>
          <p className={styles.link}>Roadmap</p>
          <p className={styles.link}>NFTs</p>
          <p className={styles.link}>Buy Now</p>
        </div>
        <div className={styles.socials}>
          <h2 className={styles.footerHeader}>Socials</h2>
          <div className={styles.socialIcons}>
            <img className={styles.socialIcon} src={facebook} alt="facebook" />
            <img
              className={styles.socialIcon}
              src={instagram}
              alt="instagram"
            />
            <img className={styles.socialIcon} src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
