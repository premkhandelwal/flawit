import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/about';
import Features from './components/Features/Features';
import './index.css';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <About />
      <Features />
    </div>
  );
}

export default App;
