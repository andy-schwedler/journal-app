import "./App.css";
import { Entries } from "./components/Entries/Entries";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Tab } from "./components/Tab/Tab";

console.clear();

function App() {
  return (
    <>
      <Header />
      <Form />
      <Tab />
      <Entries />
      <Footer />
    </>
  );
}

export default App;
