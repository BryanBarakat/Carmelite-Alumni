import './App.css';
import Landing from "../src/components/Landing/Landing";
import Panel from './components/Panel/Panel';
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
