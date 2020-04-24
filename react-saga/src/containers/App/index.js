import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import styles from './styles'
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';

class App extends Component {
  render() {
    // console.log("props", this.props);
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard></Taskboard>
      </ThemeProvider>
    );
  }
}


export default withStyles(styles)(App);
