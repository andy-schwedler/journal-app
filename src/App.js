import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Tab } from "./components/Tab/Tab";
import { Memories } from "./components/Memories/Memories";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";


function App() {
  return (
    <>
      <Header />

      <Form />
      <Tab />
      <Memories />
      <Main />

      <Footer />
    </>
  );
}

export default App;
