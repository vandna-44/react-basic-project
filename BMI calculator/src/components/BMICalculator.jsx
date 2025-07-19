import React from 'react'
import { useState } from 'react'

const BMICalculator = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [Status, setStatus] = useState("");

  // calculate BMI
   
  const BMICalculate = () =>{
      if(weight && height){
        const heightInMeters = height/100;
        const calculateBMI = (weight/ (heightInMeters **2)).toFixed(2);
        setBMI(calculateBMI);

        if(calculateBMI < 18.5){
          setStatus("Underweight");
        }else if(calculateBMI >= 18.5 && calculateBMI <=24.9){
          setStatus("Normal weight");
        }else if(calculateBMI >= 25 && calculateBMI <= 29.9){
          setStatus("overweight");
        }   else{
          setStatus("Obesity");
        }

      }else{
        alert("Please enter valid value for weight and height ")
      }
  }



  return (
    <>
    <div className='max-w-[400px] w-full p-5 bg-white rounded-lg shadow-md text-center font-sans'>
        <h1 className='text-2xl font-bold text-gray-900'>BMI Calculator</h1>
        <div className='mb-20'>
          <input type="number"
          placeholder='wieght (kg)'
          className='w-full p-3 my-2 border border-gray-300 rounded text-base' 
          onChange={(e) => setWeight(e.target.value)}
          />
          <input type="number"
          placeholder='height (cm)'
          className='w-full p-3 my-2 border border-gray-300 rounded text-base' 
          onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button onClick={BMICalculate} className='px-5 py-3 text-white bg-green-600 border-none rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-700'>Calculate BMI</button>
        {
          bmi && (
            <div className='mt-8 text-[1.2rem] text-gray-600'>
          <h2>Your BMI: {bmi}</h2>
          <h3>Status: {Status}</h3>
        </div>
          )
        }

    </div>
    </>
  )
}

export default BMICalculator
