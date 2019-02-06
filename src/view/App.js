import React, {Component} from 'react';
import RounterIndex from "../router/router";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
      <main className="main">
              <Header  />
                    <RounterIndex />
              <Footer />
               </main>
      </div>
    );
  }
}

export default App;
