import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import CurrentWeatherInfo from './CurrentWeatherInfo';

// icon :  http://openweathermap.org/img/wn/{iconcode}@2x.png
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric

const Home = () => {
    const key = "574d8ef8db7452cb9ab658c7af17bd9a"

    const [city, setCity] = useState('')
    const [response, setReponse] = useState({})
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(false)

    async function searchCity() {

        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

            if (res.status === 200) {
                setReponse(res)
                console.log(res)
                document.title = res.data.name

                setLoading(true)

                const res2 = await axios.get(`https://restcountries.com/v2/alpha/${res.data.sys.country}`)
                if (res2.status === 200) {
                    setCountry(res2)
                    setLoading(false)
                    console.log(res2)
                }
            }
        }
        catch {
            setReponse({ "status": 404 })
        }

    }

    const cityInputHandler = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className='container mt-4'>

            <div className=' d-flex justify-content-center'>
                <div className="input-group mb-3" style={{ width: '700px' }}>
                    <input onChange={cityInputHandler} type="text" className="form-control" placeholder="City" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button onClick={searchCity} className="btn btn-danger" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>

            <CurrentWeatherInfo response={response} country={country} loading={loading} />

        </div>
    )
}

export default Home