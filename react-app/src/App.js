import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/users')
    .then((response) => response.json())
    .then((data) => setData(data.json))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "No data" : data}</p>
      </header>
    </div>
  );
}

export default App;
