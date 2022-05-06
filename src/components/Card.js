import React from 'react';
import convoIcon from '../assets/icon-conversations-small.svg'
import leadIcon from '../assets/icon-leads-small.svg'
import starDefault from '../assets/star-default.svg'
import starActive from '../assets/star-active.svg'
import styles from '../styles/card.module.css'

export default function Card(props) {
  const { name, description, image, campaign, lead, favorited, created, archived } = props;

  return (
    <div
      className={ archived ? styles.archive : styles.card}
    >
      <div className={styles.layout}>
        <div className={styles.flexbox}>
          <img src={image} alt="" className={styles.image}/>
          <div className={styles.header}>
            <div className={styles.name}>{name}</div>
            <div className={styles.create}>{ archived ? 'Archived' : 'Created'} {created}</div>
          </div>
          <div className={styles.favorite}>
            <img src={ favorited ? starActive : starDefault } alt="" />
          </div>
        </div>
        <div className={styles.padding}>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.spacing}>
          <div className={styles.flexbox}>
            <img src={convoIcon} alt="" />
            <p className={styles.sub}>{campaign.toLocaleString()} Campaigns</p>
            <img src={leadIcon} alt="" />
            <p className={styles.sub}>{lead.toLocaleString()} Leads</p>
          </div>
        </div>
      </div>
    </div>
  )
}
