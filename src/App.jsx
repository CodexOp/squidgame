import Landing from "./components/Landing/Landing";
import Mint from "./components/Mint/Mint";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import "@rainbow-me/rainbowkit/dist/index.css";
import { darkTheme } from "@rainbow-me/rainbowkit";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const BSCchain = {
  id: 56,
  name: "BSC",
  network: "BSC",
  iconUrl: "https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Smart Chain",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://bsc-dataseed1.ninicoin.io",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://bscscan.com" },
    etherscan: { name: "SnowTrace", url: "https://bscscan.com" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [BSCchain, chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Squidgame",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <div className={styles.App}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "#C81C48",
            accentColorForeground: "white",
            borderRadius: "medium",
          })}
        >
          <Landing />
          <Mint />
          <About />
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
