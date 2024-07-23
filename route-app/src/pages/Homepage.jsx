import React from 'react'
import PageNav from '../components/PageNav';
import Styles from './Homepage.module.css';
import Packlist from '../components/Packlist';
import Form from '../components/form'

export default function Homepage() {
  return (
    <div className={Styles.man}  >
        <PageNav/>
        <Form/> 
        <Packlist/>
    </div>
  );
}