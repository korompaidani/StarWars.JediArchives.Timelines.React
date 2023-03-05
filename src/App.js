import { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    fetch('https://localhost:44355/api/v1/Timeline/all')
      .then(response => response.json())
      .then((entries) => setTimelines(entries));
  }, []);

  console.log(timelines);
}

export default App;
