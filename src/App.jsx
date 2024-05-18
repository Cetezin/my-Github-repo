import AppRouter from "./AppRouter";
import {Heading} from "@chakra-ui/react"
import "./App.css";

function App() {
  return <section className="container">
    <Heading className="main" color="#f2e5af"><h1>John Kunamon's github repo</h1></Heading>
    <AppRouter />
  </section>
}

export default App;
