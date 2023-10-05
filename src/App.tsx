import { AboutProject } from "./components/about.project";
import { Home } from "./features/home/home";
import { Portfolio } from "./features/portfolio/portfolio";
import "./features/home/home.css";
function App() {
  return (
    <>
      <Home />
      <Portfolio />
      <AboutProject />
    </>
  );
}

export default App;
