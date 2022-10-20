import React from 'react'
import styles from './ContentWrapper.module.css'

export const ContentWrapper = ({ children, className = '' }) => {
   return <div className={`${styles.wrapper} ${className}`}>{children}</div>
}
