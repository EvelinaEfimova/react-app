import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';
import logo from '../Images/logo.png';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
       <div className={styles.menu}>
        <Link to='/' className={styles.link}>
          <div className={styles.item}>
            About
          </div>
        </Link>
        <Link to='/todo' className={styles.link}>
          <div className={styles.item}>
            Todo
          </div>
        </Link>
        <Link to='/contacts' className={styles.link}>
          <div className={styles.item}>
            Contacts
          </div>
        </Link>
       </div>
      </div>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
      <div className={styles.footer}>
        <p className={styles.text}>created in</p>
        <img src={logo} alt='school' className={styles.picture} />
      </div>
    </Router>
  )
}

export default App;