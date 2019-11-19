import React, { useState, useEffect } from 'react';
import Current from './Current';
import Forecast from './Forecast';
import Spinner from './Spinner';
import axios from 'axios';
import keys from './keys';
import './App.css';

const App = () => {
    const key = keys();
    // const [count, setCount] = useState(0);
    // const [number, setNumber] = useState(1);

    // useEffect(() => {
    //     console.log('useEffect 동작!');
    //     document.title = `${count}번 클릭하셨습니다!`;
    // }, [count]);
    const [current, setCurrent] = useState(null);
    const [unit, setUnit] = useState('c');
    const [forecast, setForecast] = useState(null);

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }
    const getTemp = async coords => {
        console.log(coords);
        const { latitude: lat, longitude: lon } = coords;
        console.log(lat);
        console.log(lon);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=kr`;
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=kr`;
        const result = await axios.get(url);
        const result2 = await axios.get(url2);
        console.log(result);
        console.log(result2);
        setCurrent(result.data);
        setForecast(result2.data);
    };
    const getHourlyTemp = async coords => { };

    const getAll = async () => {
        try {
            const { coords } = await getLocation();
            await getTemp(coords);
            await getHourlyTemp(coords);
        } catch (error) {
            alert('위치 정보 동의가 필요합니다.')
        }
    }

    useEffect(() => {
        getAll();
    }, []);
    console.log('current :',current);
    return (
        <>
            <header>
                <h1>일기예보</h1>
            </header>
            <main className="container">
                {current && forecast? <><Current current={current} unit={unit} setUnit={setUnit}/><Forecast forecast={forecast} unit={unit} setUnit={setUnit}/></>: <Spinner></Spinner>}
            </main>
        </>
    )
};

export default App;