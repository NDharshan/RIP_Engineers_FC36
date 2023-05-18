import React from 'react'
import ProfilePicture from '../images/pokemon.png';

function Card(props) {
    const {name} = props
  return (
    <div>
        <div class="flex items-center space-x-10 py-2">
          <img className="w-10 h-10 rounded-full" src={ProfilePicture} alt={"Carlie Anglemire"}/>
              <div class="font-medium dark:text-white">
                  <div>{name}</div>
                  <div class="text-md text-gray-500 dark:text-gray-400">Joined in May 2023</div>
              </div>
          </div>
          <hr/>
    </div>
  )
}


function DisplayBen(props) {
    const {names} = props
    return names.map(name => <Card name={name} />)
}

export default DisplayBen