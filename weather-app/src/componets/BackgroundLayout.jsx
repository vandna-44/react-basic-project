import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'

import Clear from '../assets/images/Clear.jpg'
import fog from '../assets/images/fog.jpg'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'


const BackgroundLayout = () => {

  const { weather } = useStateContext()

  const [image, setImage] = useState(Clear)

  useEffect(() =>{
    if(weather.conditions) {
      let imageString = weather.conditions

      if(imageString.toLowerCase().includes('clear')){

        setImage(Clear)
      }else if (imageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }else if (imageString.toLowerCase().includes('Cloud')){
        setImage()
      }else if (imageString.toLowerCase().includes('Cloud')){
        setImage()
      }else if (imageString.toLowerCase().includes('Cloud')){
        setImage()
      }else if (imageString.toLowerCase().includes('Cloud')){
        setImage()
      }else if (imageString.toLowerCase().includes('Cloud')){
        setImage()
      }
    }
  })

  cost (e)

  console.log(weather)
  return (
    <div>
      
    </div>
  )
}

export default BackgroundLayout
