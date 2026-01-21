import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DemoModal from "./components/DemoModal";
import Feature from "./components/Feature";
import Cards from "./components/FeatureCards";
import ScrollCards from "./components/ScrollRevealCards";
import UseCasesSection from "./components/UseCasesSection";
import PricingSection from "./components/PricingSection";
import Demo from "./components/Demo";
import SupportResources from "./components/SupportResources";
import EfficiencyBanner from "./components/Efficiency";
import Footer from "./components/Footer";
function App() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <Header onRequestDemo={() => setShowDemo(true)} />
      <Hero />
      <Feature/>
      <Cards/>
      <ScrollCards />
      <UseCasesSection/>
      <PricingSection/>
      <Demo/>
      <SupportResources/>
      <EfficiencyBanner/>
      <Footer/>
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </>     
  );
}

export default App;




