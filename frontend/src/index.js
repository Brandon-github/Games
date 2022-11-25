import React from "react";
import { render } from "react-dom"; 

const App = () => {
  return (
    <div id="app">
      <h1 className="app__title">Application Title</h1>
    </div>
  );
}

render(<App />, document.getElementById('root'));