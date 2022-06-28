import nft from "../../assets/nft.png";
import styles from "./Mint.module.css";

const Mint = () => {
  return (
    <div className={styles.mintContainer}>
      <div className={styles.mint}>
        <div className={styles.header1}>MINT YOUR SQUIDGAME2.0</div>
        <div className={styles.header2}>And Earn Insane Rewards</div>
        <div className={styles.description}>
          500 Nft collection, 0.3 bnb each.Minting a Chimpstronaut NFT will
          allow you to stake it and receive Secondary Token for each P2E Game we
          are releasing.10 out of 500 will award you instantly 1 bnb and will
          let you participate into our Lottery&#40;2 out of 10 Lucky winners
          will get 5 BNB Each&#41; Nft holders will also receive $CHIM&#40;our
          primary token&#41; as airdrop.And NFT Holders will receive Merchandise
          with their own NFT on it.There is much more to be honest.Everything is
          on our Whitepaper, here is only a brief introduction to the amazing
          rewards you will be getting by owning a CHIMPSTRONAUT!!!
        </div>
        <button className={styles.mintButton}>MINT NOW</button>
        <div className={styles.mintData}>
          Minted <span className={styles.pink}>1</span> Of{" "}
          <span className={styles.pink}>100</span>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={nft} alt="NFT" />
          </div>
          <div className={styles.card}>
            <img src={nft} alt="NFT" />
          </div>
          <div className={styles.card}>
            <img src={nft} alt="NFT" />
          </div>
          <div className={styles.card}>
            <img src={nft} alt="NFT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
