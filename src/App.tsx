import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import SearchGifs from "./pages/SearchGifs/SearchGifs";
import TrendGifs from "./pages/TrendGifs/TrendGifs";
import RandomGif from "./pages/RandomGif/RandomGif";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <Routes>
          <Route path="/" element={<SearchGifs />}></Route>
          <Route path="/trending" element={<TrendGifs />}></Route>
          <Route path="/random" element={<RandomGif />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
