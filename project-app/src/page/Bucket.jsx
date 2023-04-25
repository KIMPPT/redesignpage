import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
export default function Bucket() {
    let {state}=useContext(DataContext)
  return (
    <div>
     <h3>이름 : {state.choiceprice.name}     </h3>
     <h3>가격 : {state.choiceprice.price}     </h3>
     <h3>갯수 : {state.choiceprice.choice}     </h3>
        </div>
  )
}
