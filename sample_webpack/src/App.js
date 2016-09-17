import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from './Drawer';

import './App.styl';

injectTapEventPlugin();

class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <Drawer />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
