import { useContext, createContext, useState, useEffect, Children } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({Children}) =>{
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState({})
    const [place, setPlace] = useState({'Jaipur'})
    const [thislocation, setLocation] = useState('')


    //fatch api 
    const fetchWeather = async() =>{
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            param:{
                aggregateHoures: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }

        }

        try {
            const response = await axios.request(options);
            console.log(response.data)
            const thisData = Object.values(response.data.location)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        } catch (e) {
            console.error(e);
            //if the api throws error.
            alert('This place does not exist')
        }
    }

    useEffect(() =>{
        //fatchWeather()

    },[place])
    
    
    useEffect(() =>{
        console.log(values)
    },[values])
    
    return{
        <StateContext.Provider value ={{
            weather,

            setPlace,

            values,

            thislocation,
        }}>
           
             {Children}
            
        </StateContext.Provider>
    }

}

export const useStateContext = ()=> useContext(StateContext)