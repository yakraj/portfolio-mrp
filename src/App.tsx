import { AboutProject } from "./components/about.project";
import { Home } from "./features/home/home";
import { Portfolio } from "./features/portfolio/portfolio";
import "./features/home/home.css";
import { ContactPage } from "./features/contact/contact";
function App() {
  return (
    <>
      {/* <Home />
      <Portfolio />
      <AboutProject /> */}
      <ContactPage />
    </>
  );
}

export default App;
