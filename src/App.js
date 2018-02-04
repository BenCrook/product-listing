import React, { Component } from 'react';
import logo from './logo.svg';

import appStyles from './App.css';
import buttonStyles from './ui/button/Button.css';

import Button from './ui/button/Button';

// Combine styles
let styles = {};
Object.assign(styles, appStyles, buttonStyles)


class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
            <Button modifier={`${styles.red} ${styles.large}`} link={"//google.com"} text={"Test Button"} />
            <Button modifier={styles.red} link={"//google.com"} text={"Test Button"} />
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
