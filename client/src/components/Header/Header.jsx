import React from 'react'
import { ContentWrapper } from '../ContentWrapper'
import styles from './Header.module.css'
import WaveImage from './wave.svg'

export const Header = () => {
   return (
      <div className={styles.header}>
         <ContentWrapper className={styles.content}>
            <h1 className={styles.title}>{`Путешествуйте с\n Комфортом`}</h1>
            <p className={styles.desc}>{`С нашей компанией вы забудете обо всем, кроме\n высокого уровня путешествий `}</p>
         </ContentWrapper>
         <img src={WaveImage} alt='' className={styles.wave} />
      </div>
   )
}
