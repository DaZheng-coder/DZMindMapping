import "./App.css";
import MindMapping from "./components/MindMapping";
import { MOCK_MIND_MAPPING } from "./mock";

function App() {
  return <div>
    <MindMapping node={MOCK_MIND_MAPPING} />
  </div>;
}

export default App;
