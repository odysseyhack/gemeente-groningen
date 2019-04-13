import React, { Component } from 'react';
import { DrizzleContext } from "drizzle-react";
import './App.css';
import MyDrizzleApp from "./MyDrizzleApp";

class App extends Component {
  render() {
    return (
        <DrizzleContext.Consumer>
          {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;
            if (!initialized) {
              return "Loading...";
            }

            return (
                <MyDrizzleApp drizzle={drizzle} drizzleState={drizzleState} />
            );
          }}
        </DrizzleContext.Consumer>
    );
  }
}

export default App;
