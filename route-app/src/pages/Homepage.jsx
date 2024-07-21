import React from 'react'
import PageNav from '../components/PageNav';
import Styles from './Homepage.module.css';
import Animation from '../components/Animation'
import Packlist from '../components/Packlist';

export default function Homepage() {
  return (
    <div className={Styles.nav}>
        <PageNav/>
        <Animation/>
        <Packlist/>
      
    </div>
  );
}