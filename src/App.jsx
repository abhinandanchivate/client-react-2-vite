import "./App.css";
import Footer from "./core/components/Footer";
import Header from "./core/components/Header";
import Landing from "./core/components/Landing";
import RootRouter from "./RootRouter";

function App() {
  return (
    // will hold all the data needs to be
    // rendered on the page
    <>
      <Header />
      <RootRouter />
      <Footer />
    </> // it is fragment.
  );
}

export default App;
