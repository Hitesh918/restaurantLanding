import './App.css';
import Background from './components/Background';
import AvailableAcross from './components/AvailableAcross';
import Properties from './components/Properties';
import TopVenues from './components/TopVenues';
import EventTypes from './components/EventTypes';
import Advisor from './components/Advisor';
function App() {
  return (
    <div className="App">
      <Background />
      <AvailableAcross />
      <Properties />
      <TopVenues />
      <EventTypes />
      <Advisor />
    </div>
  );
}

export default App;
