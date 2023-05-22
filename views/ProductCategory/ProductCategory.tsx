import React from 'react'
import CategoryStatus from '@/components/shared/CategoryStatus/CategoryStatus'
import Filter from '@/components/shared/Filter/Filter'


function ProductCategory() {
  return (
    <React.Fragment>
        <CategoryStatus/>
        <Filter/>
    </React.Fragment>
  )
}

export default ProductCategory