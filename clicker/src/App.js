import React from "react";
import Clicker from "./components/Clicker";
import Upgrades from "./components/Upgrades";

class App extends React.Component {
  render() {
    return(
      <div>
        <Clicker />
        <Upgrades/>
      </div>
    );
  }
}

export default App;
