import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Tab } from "./components/Tab/Tab";
import { Memories } from "./components/Memories/Memories";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Tab />
      <Memories />
      <Footer />
    </>
  );
}

export default App;
