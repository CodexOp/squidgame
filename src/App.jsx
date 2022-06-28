import Landing from "./components/Landing/Landing";
import Mint from "./components/Mint/Mint";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Landing />
      <Mint />
      <About />
      <Footer />
    </div>
  );
}

export default App;
