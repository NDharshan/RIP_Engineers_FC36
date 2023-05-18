import React from 'react'
import AddAsset from './AddAsset'
import Chart from './AssetChart'
import AddProportion from './AddProportion'



function AddContent() {
  return (
    <div className='bg-white p-12 m-26 w-50 flex flex-row'>
      <br/><br/><br/>
      {/* md:w-3/5 xl:w-6/7 */}
        <AddAsset className="flex flex-col items-center text-gray-800 shadow-md bg-white px-32  m-20 w-screen h-full md:h-auto "/>

    </div>
  )
}

export default AddContent