import Logo from "./Logo.js"
import './App.css';
import { Link } from "./components/links.jsx";
import { Btn } from "./components/button.jsx";

function App() {
  return (
    <div className="App">
      <Logo/>
      <Link/>
      <Btn/>
    </div>
  );
}

export default App;
