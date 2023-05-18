import React, { useEffect, useState } from 'react'
import ChipGenerator from './ChipGenerator';
import Chart from './AssetChart';
import storage from '../storage';

let beniProp = []
let beniPropObj = []
let benNames = []
let publicKeys = []


const upload = () => {
  storage.ref("AddProportion.js").put("")
  .on("state_changed" , alert("success") , alert);
}



function AddProportion(props) {

    const { assetClients } = props;
    const [name, setName] = useState('');
    const [asset, setAsset] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [proportion, setProportion] = useState(0)
    const [items, setItems] = useState([]);
    const handleChange = e => setAsset(e.target.value);
    
    function Upload() {

      let data = JSON.stringify(publicKeys, null, 4);
      useEffect(() => {
        localStorage.setItem('items', data);
        localStorage.setItem('benNames', benNames);
      }, [items]);
    
      localStorage.setItem('items', JSON.stringify(items));
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

    const handleSubmit = e => {
        e.preventDefault();
        if(asset === '' || name === '' || proportion === 0) return;
        beniPropObj.push({
            name: name,
            publicKey: publicKey,
          	asset: asset,
            "proportion": proportion
        });
        // console.log(asset)
        // console.log(beniPropObj)

        benNames = beniPropObj.map(a => a.name);
        benNames = Array.from(new Set(benNames))

        publicKeys = benNames.map(a => Object({
            "name": a
        }));

        beniPropObj.forEach(a => {
            publicKeys.forEach(b=> {
                if(a.name==b.name){
                    b[a.asset] = a.proportion
                }
            })
        })
        console.log(publicKeys)
        
        

    };
    
    

  return (
    <div>
        <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-4xl dark:text-white" >Proportion</h2>
        <form onSubmit={handleSubmit} >
            
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white" >
            Choose Asset:
            
            {/* <select name="beni" value={beni} onChange={handleChange}> */}
            <select value={asset} onChange={handleChange}>
              { assetClients.map(item => {
                  return (<option key={item} 
                                  value={item}
                                  class={`bg-gray-50 border border-gray-300 
                                          text-gray-900 text-sm rounded-lg 
                                          focus:ring-blue-500 focus:border-blue-500 
                                          block w-full p-2.5 dark:bg-gray-700 
                                          dark:border-gray-600 dark:placeholder-gray-400 
                                          dark:text-white dark:focus:ring-blue-500 
                                          dark:focus:border-blue-500`}>
                                    {item}
                        </option>);
              })}
            </select>
          </label>
            
            <input type='text'
                    className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id='name'
                    name='name'
                    placeholder='The Benificiary Name'
                    onChange={ (event) => setName(event.target.value) }
            />

            <input type='text'
                    className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id='publicKey'
                    name='publicKey'
                    placeholder='The Benificiary Public Key'
                    onChange={ (event) => setPublicKey(event.target.value) }
            />
      
            <input type='number'
                    className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id='assetType'
                    name='assetType'
                    placeholder='Proportion of Asset'
                    onChange={ (event) => setProportion(event.target.value) }
            />
        
            
        <button type="submit" className={`  text-white bg-pink-400 hover:bg-pink-300 
                                            focus:ring-4 focus:outline-none focus:ring-pink-300 
                                            font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                            inline-flex items-center dark:bg-pink-200 
                                            dark:hover:bg-pink-300 dark:focus:ring-pink-300 `}>
            Next
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
            <br/>
            <ChipGenerator beniPropObj={beniPropObj} />
        </form>
        <Upload />
    </div>
  )
}

export default AddProportion


