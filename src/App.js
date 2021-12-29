import { useEffect, useState } from 'react';
import './App.css';
import NewsList from './components/NewsList/NewsList';
import Tabs from './components/Tabs/Tabs';
import { requestFootball, requestTravel, requestUKNews } from './services/api/api';

function App() {

  const [news, setNews] = useState([])
  const [currentTab, setCurrentTab] = useState("UK-News")


    useEffect(() => {
        requestUKNews().then((data) => setNews(data))
    }, [])
  
  useEffect(() => {
        switch (currentTab) {
          case "UK-News":
            requestUKNews().then((data) => setNews(data))
            break;
          
          case "Football":
            requestFootball().then((data) => setNews(data))
            break;
          
          case "Travel":
            requestTravel().then((data) => setNews(data))
            break;
        
          default:
            break;
        }
    }, [currentTab])
  
  return (
    <div className="main">

      <h1>Guardian clientside tabs challenge</h1>
    
      <div className="tab-panel-container">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <NewsList data={news}/>
      </div>

  </div>
  );
}

export default App;
