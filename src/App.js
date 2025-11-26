import './App.css';
import Background from './components/Background';
import AvailableAcross from './components/AvailableAcross';
import Properties from './components/Properties';
import TopVenues from './components/TopVenues';
function App() {
  return (
    <div className="App">
      <Background />
      <AvailableAcross />
      <Properties />
      <TopVenues />
    </div>
  );
}

export default App;
