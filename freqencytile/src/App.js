import "./App.css";
import RecommendationChart from "./conponent/chart";
import FrequencyChangeTable from "./conponent/Frequency";
import HeaderBar from "./conponent/Headerbar";
import TrackedFrequencyTable from "./conponent/jashwant";
import Sidebar from "./conponent/Sider";
import FilterHeader from "./conponent/Headerfilter";
import Dashboard from "./conponent/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard/>
      {/* <FilterHeader/>
      <HeaderBar/>
      <RecommendationChart/> */}
      {/* <Sidebar/> */}
      <FrequencyChangeTable/>
      <TrackedFrequencyTable/>
    </div>
  );
}

export default App;
