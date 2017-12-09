import React from 'react';
import styles from './Welcome.css';

function Welcome() {
  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      <p>This is a React-Redux boilerplate.</p>
      <img
        className={styles.img}
        src="./assets/img/dance.webp"
        alt="Dancing Baby"
      />
    </div>
  );
}

export default Welcome;
