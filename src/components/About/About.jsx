import ape from "../../assets/ape.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.about}>
        <div className={styles.descriptionSection}>
          <h1 className={styles.aboutHeader}>ABOUT SQUIDGAME2.0</h1>
          <div className={styles.description}>
            500 Nft collection, 0.3 bnb each.Minting a Chimpstronaut NFT will
            allow you to stake it and receive Secondary Token for each P2E Game
            we are releasing.10 out of 500 will award you instantly 1 bnb and
            will let you participate into our Lottery&#40;2 out of 10 Lucky
            winners will get 5 BNB Each&#41; Nft holders will also receive
            $CHIMP&#40;our primary token&#41; as airdrop.And NFT Holders will
            receive Merchandise with their own NFT on it
          </div>
          <div className={styles.mintButtons}>
            <button className={styles.knowMore}>Know More</button>
            <button className={styles.mintNow}>Mint Now</button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img src={ape} alt="APE" />
        </div>
      </div>
    </div>
  );
};

export default About;
