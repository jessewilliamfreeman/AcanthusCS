import React from 'react';

import NavbarGap from "../components/navbargap";

import styles from "../components/about.module.scss";

class About extends React.Component {
  render () {
    return (
      <div id="about" className={styles.about}>
        <div className={styles.aboutBackground}></div>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutText}>
            <h1>About</h1>
            <p>
              {this.props.data.text}
            </p>
            <h4>- Ryan Kacani, Founder</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default About
