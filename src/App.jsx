import "./App.css";
import Education from "./components/education";
import Work from "./components/experience";
import General from "./components/general";

function App() {
  return (
    <div>
      <General />
      <Education />
      <Work />
    </div>
  );
}

export default App;
