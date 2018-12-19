import React from 'react';

import logo from "../images/logo.svg"

import styles from "../components/landing.module.scss";

class Landing extends React.Component {
  render () {
    return (
      <div id="landing" className={styles.landing}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <h2 className={styles.landingText}>
          {this.props.data.text}
        </h2>
      </div>
    )
  }
}

export default Landing