import React from 'react'
import Loading from './Loading'
import NoFoundPage from './NoFoundPage';

const WeatherInfo = ({ response, country, loading }) => {

    if (response.status !== 200) {
        return (
            response.status === 404 && <NoFoundPage />
        )
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '80vh' }}>
            <div className="card text-center shadow-lg" style={{ width: '30rem' }}>
                <div className='mt-1'>
                    <img className='card-img-top' src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`} alt="" style={{ width: '100px' }} />
                </div>

                <h5>{response.data.weather[0].main} / {response.data.weather[0].description} </h5>

                <div className="card-body">

                    <h3 className='card-title'> {response.data.name} - {response.data.sys.country} </h3>
                    {
                        loading === true ? <Loading /> : <img src={country.status && country.data.flags.png} alt=""
                            style={{ width: '250px ', margin: '10px 0', border: '2px solid black' }} />
                    }
                    <h4> {country.status && country.data.name + ' - ' + country.data.nativeName} </h4>
                    <div className="row mt-3">

                        <div className="col-md-6">
                            <h5 className='card-title'>Temperature: {response.data.main.temp} {'\u00B0'}C</h5>
                            <h5 className='card-title'>Feels_like: {response.data.main.feels_like} {'\u00B0'}C</h5>
                            <h5 className='card-title'>Humidity: {response.data.main.humidity} %</h5>
                        </div>

                        <div className="col-md-6">
                            <h5 className='card-title'>Pressure: {response.data.main.pressure} pa</h5>
                            <h5 className='card-title'>Temp max: {response.data.main.temp_max} {'\u00B0'}C</h5>
                            <h5 className='card-title'>Temp min: {response.data.main.temp_min} {'\u00B0'}C</h5>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <h6>Wind speed: {response.data.wind.speed} m/s</h6>
                        <h6>Wind degree: {response.data.wind.deg} {'\u00B0'}</h6>
                        <h5>Search Time (Local): {new Date().toLocaleString()} </h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WeatherInfo