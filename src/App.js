import React, { Component } from 'react';
import logo from './logo.svg';

import styles from './App.css';
import buttonStyles from './ui/button/Button.css';

import Button from './ui/button/Button';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
            <Button modifier={`${buttonStyles.red} ${buttonStyles.large}`} link={"//google.com"} text={"Test Button"} />
            <Button modifier={buttonStyles.red} link={"//google.com"} text={"Test Button"} />
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
