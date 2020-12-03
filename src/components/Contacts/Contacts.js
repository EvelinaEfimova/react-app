import React from 'react';
import styles from './Contacts.module.css';
import envelope from './Icons/envelope.png';
import plane from './Icons/paper-plane.png';
import phone from './Icons/phone-call.png';
import placeholder from './Icons/placeholder.png';

const Contacts = () => (<div className={styles.container}>
  <h1 className={styles.title}>Contancts</h1>
  <div className={styles.wrap}>
    <div className={styles.item}>
      <img src={placeholder} alt='place' className={styles.picture} />
      <p className={styles.text}>Moscow, Russia</p>
    </div>
    <div className={styles.item}>
      <img src={phone} alt='phone' className={styles.picture} />
      <p className={styles.text}>8 (977) 338 55 98</p>
    </div>
    <div className={styles.item}>
      <img src={plane} alt='telegram' className={styles.picture} />
      <a href='https://tele.gs/wijifq' className={styles.link}>@wijifq</a>
    </div>
    <div className={styles.item}>
      <img src={envelope} alt='mail' className={styles.picture} />
      <a className={styles.link} href='mailto:evelinfimova@gmail.com'>evelinfimova@gmail.com</a>
    </div>
  </div>
</div>)

export default Contacts;