import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { EarningPotential } from "./components/EarningPotential";
import { Features } from "./components/Features";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <EarningPotential />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
