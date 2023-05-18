import React from 'react'
import AddAsset from './AddAsset'
import Chart from './AssetChart'
import AddProportion from './AddProportion'



function AddContent() {
  return (
    <div className='bg-white p-12 m-26'>
        <AddAsset className="flex flex-col items-center text-gray-800 shadow-md bg-white p-12 m-20 w-full h-full md:h-auto md:w-3/5 xl:w-4/5"/>

    </div>
  )
}

export default AddContent