import React from 'react'
import CompanyIcon from '../assets/icon-companies.svg'
import AddIcon from '../assets/add.svg'
import Teams from './Teams.js'
import styles from '../styles/content.module.css'

export default function Content() {
  return (
    <div>
      <div className={styles.content}>
        <img src={CompanyIcon} alt="" />
        <div className={styles.header}>Teams</div>
        <div className={styles.end}>
        <button className={styles.button}>
            <img src={AddIcon} alt="" />
            <div className={styles.spacing}>Create new team</div>
          </button>
        </div>
      </div>
      <Teams />
    </div>
  )
}
