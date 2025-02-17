import "lenis/dist/lenis.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./section/Header";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: "vertical", 
      smooth: true, 
      smoothTouch: false, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
