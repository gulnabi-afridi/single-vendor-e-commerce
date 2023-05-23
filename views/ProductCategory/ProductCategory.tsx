import React from 'react'
import CategoryStatus from '@/components/shared/CategoryStatus/CategoryStatus'
import Filter from '@/components/shared/Filter/Filter'
import Products from './Products' 

function ProductCategory() {
  return (
    <React.Fragment>
        <CategoryStatus/>
        <Filter/>
        <Products/>
    </React.Fragment>
  )
}

export default ProductCategory