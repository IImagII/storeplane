import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ContentWrapper } from '../../components/ContentWrapper'
import styles from './OrderPlanePage.module.css'

export const OrderPlanePage = () => {
   const navigate = useNavigate()
   return (
      <ContentWrapper className={styles.order}>
         <h1>Ваш заказ будет в ближайщее время</h1>
         <Button
            containerClassName={styles.button}
            onClick={() => navigate('/')}
         >
            На главную
         </Button>
      </ContentWrapper>
   )
}
