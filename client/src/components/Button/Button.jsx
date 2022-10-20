import React from 'react'
import styles from './Button.module.css'

export const Button = ({ children = '', containerClassName = '', className = '', onClick = () => null, isBackButton = false }) => {
   return (
      <div className={containerClassName}>
         <span className={`${isBackButton ? styles.backButton : styles.button} ${className}`} onClick={onClick}>
            {children}
         </span>
      </div>
   )
}
