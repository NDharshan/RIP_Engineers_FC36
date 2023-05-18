import React, { useEffect, useState } from 'react'
import AddProportion from './AddProportion'

let assetData = []
let assetClients = []

function AddAsset() {

    const [asset, setAsset] = useState('')
    const [value, setValue] = useState(0.0)
    const [assets, setAssets] = useState([]);

    function Upload() {

        let data = JSON.stringify(assetData, null, 4);
        useEffect(() => {
          localStorage.setItem('assets', data);
        }, [assets]);
      
        localStorage.setItem('assets', JSON.stringify(assets));
        return (
          <button type="text" className={`  text-white bg-pink-400 hover:bg-pink-300 
                                                  focus:ring-4 focus:outline-none focus:ring-pink-300 
                                                  font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                                  inline-flex items-center dark:bg-pink-200 
                                                  dark:hover:bg-pink-300 dark:focus:ring-pink-300 `}>
                  Upload
              </button>
        )
    }

    const myFunc = () => {
        let j = 0
        assetClients = assetData.map(i => i.asset)
        console.log(assetClients)
        // assetClients = ['Kamala Srinivas', 'Kamala']
        let temp = assetClients.map((client) => 
        <span className="bg-green-100 text-green-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{client}</span>
        )
        return <div>{temp}</div>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if((asset==='' || value===0) || assetClients.includes(asset)) return;
        assetData.push(
            { 
                'asset': asset,
                'value': value
            }
        )
        myFunc()
        console.log(assetData)
    }

  return (
    <div>
        <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-4xl dark:text-white" >Add Asset</h2>
        <form onSubmit={handleSubmit} >
            <input type='text'
                    className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id='assetType'
                    name='assetType'
                    placeholder='The Crypto Asset'
                    onChange={ (event) => setAsset(event.target.value) }
            />

            <input type='number'
                    className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id='assetType'
                    name='assetType'
                    placeholder='The Total Value of Asset'
                    onChange={ (event) => setValue(event.target.value) }
            />
        
            
        <button type="submit" className={`  text-white bg-pink-400 hover:bg-pink-300 
                                            focus:ring-4 focus:outline-none focus:ring-pink-300 
                                            font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                            inline-flex items-center dark:bg-pink-200 
                                            dark:hover:bg-pink-300 dark:focus:ring-pink-300 `}>
            Next
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
            
            <h3> The assets entered: {myFunc()} </h3>
        </form>
        <Upload />
        <br />
        <br />
        
        <AddProportion assetClients={ assetClients } />
        
    </div>
  )
}

export default AddAsset