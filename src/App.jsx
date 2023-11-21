import { useState } from "react";
import "./App.css";
import Footer from "./assets/components/Footer";
import DetailView from "./assets/components/DetailView";
import { genji, brigitte, dva } from "./assets/components/HeroConstants";
import HeroStats from "./assets/components/HeroStats";

function App() {
  let [selector, setSelector] = useState({ index: 0, subIndex: 0 });
  const [heroSelection, setHeroSelection] = useState("genji");
  let heroDetails = null;
  if (heroSelection == "genji") heroDetails = genji;
  if (heroSelection == "brigitte") heroDetails = brigitte;
  if (heroSelection == "dva") heroDetails = dva;

  return (
    <>
      <HeroStats heroDetails={heroDetails} />
      <hr />
      <DetailView
        heroDetails={heroDetails}
        selector={selector}
        setSelector={setSelector}
      />
      <Footer
        heroSelection={heroSelection}
        setHeroSelection={setHeroSelection}
        setSelector={setSelector}
      />
    </>
  );
}

export default App;
