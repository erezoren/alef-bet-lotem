import React from 'react';
import '../style/App.css';
import {Home} from "./home/Home";
import "antd/dist/antd.css";
import {Provider} from "react-redux";
import store from "./redux/reducers/rootReducer";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Home/>
        </div>
      </Provider>
  );
}

export default App;
