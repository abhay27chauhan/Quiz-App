import React from 'react';

import styles from './Loader.module.scss';

function Loader({ size }) {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderIcon} style={{ width: size, height: size }} />
    </div>
  );
}

export default Loader;