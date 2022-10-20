import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../path'
import styles from './PlaneItem.module.css'

export const PlaneItem = ({ name = '', price = 0, description = '', capacity = '', planeImage = '', _id = '' }) => {
   return (
      <div>
         <Link to={`${paths.plane}/${_id}`} className={styles.planeItem}>
            <div className={styles.capatity}>{capacity}</div>
            {planeImage && <img className={styles.planeImage} src={planeImage} alt='' />}
            <div className={styles.info}>
               <h2 className={styles.title}>{name}</h2>
               <span className={styles.price}>{price}</span>
            </div>
         </Link>
      </div>
   )
}
