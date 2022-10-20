import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { ContentWrapper } from '../ContentWrapper'
import { Input } from '../Input'
import styles from './CreatePlanePage.module.css'

export const CreatePlanePage = () => {
   const navigate = useNavigate()

   return (
      <ContentWrapper className={styles.createPlane}>
         <Button
            onClick={() => navigate(-1)}
            isBackButton={true}
            className={styles.planeButton}
         >
            Назад
         </Button>
         <form className={styles.form}>
            <h1 className={styles.title}>Создать самолет</h1>
            <Input
               name='name'
               placeholder='Название самолета'
               onChange={() => null}
            />
            <Input
               name='price'
               placeholder='Цена самолета'
               onChange={() => null}
            />
            <Input
               name='description'
               placeholder='Описание самолета'
               onChange={() => null}
            />
            <Input
               name='capacity'
               placeholder='Вместимость самолета'
               onChange={() => null}
            />
            <Input
               name='planeImage'
               type='file'
               placeholder='Изображение самолета'
               onChange={() => null}
            />
            <Button
               containerClassName={styles.buttonContainer}
               onClick={() => null}
            >
               Создать
            </Button>
         </form>
      </ContentWrapper>
   )
}
