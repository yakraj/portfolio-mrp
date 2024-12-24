import { AboutProject } from "./components/about.project";
import { Home } from "./features/home/home";
import { Portfolio } from "./features/portfolio/portfolio";
// import { ContactPage } from "./features/contact/contact";
// import { NavBar } from "./features/nav/navbar";
import "./features/home/home.css";
import { MainProvider } from "./services/main.context";
import { Carousel } from "./features/carousel/carousel";
function App() {
  return (
    <MainProvider>
      <Home />
      <Portfolio />
      <AboutProject />
      <Carousel />
      {/* <ContactPage /> */}
    </MainProvider>
  );
}

export default App;
