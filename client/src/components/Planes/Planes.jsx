import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlanes } from '../../store/planes/planesSlice'
import { ContentWrapper } from '../ContentWrapper'
import { PlaneItem } from '../PlaneItem'
import { Spinner } from '../spinner/spinner'
import styles from './Planes.module.css'
import { paths } from '../../path.js'
import { Button } from '../Button'
import { useSortPlanes } from '../../hooks/useSortPlanes'

export const Planes = () => {
   const { planes, isLoading } = useSelector(state => state.reducer.planes)
   const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(
      planes || []
   )

   const dispatch = useDispatch()

   useEffect(() => {
      setTimeout(() => {
         dispatch(getPlanes())
      }, 500)
   }, [dispatch])

   if (isLoading) {
      return <Spinner />
   }
   return (
      <div>
         <div className={styles.sort}>
            <ContentWrapper className={styles.planesHeader}>
               <Button
                  className={styles.sortBtn}
                  onClick={() => setIsDescSort(!isDescSort)}
               >
                  Сортировать по цене{' '}
                  <span className={styles.DescSort}>{`${
                     isDescSort ? 'по убыванию' : 'по возрастанию'
                  } `}</span>
               </Button>
               <Link to={paths.createPlane} className={styles.createPlaneBtn}>
                  Добавить самолет
               </Link>
            </ContentWrapper>
         </div>
         <ContentWrapper className={styles.planesGrid}>
            {sortedPlanes &&
               sortedPlanes.map(plane => (
                  <PlaneItem key={plane._id} {...plane} />
               ))}
         </ContentWrapper>
      </div>
   )
}
