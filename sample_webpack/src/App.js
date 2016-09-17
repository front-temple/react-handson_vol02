import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import './App.styl';

injectTapEventPlugin();

class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
