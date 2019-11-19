import React from 'react';
import StateIcon from './StateIcon';
import './Current.css';

const Current = (props) => {
  const { name, dt, weather, main, wind, rain, snow } = props.current;
  const { unit, setUnit } = props;
  const time = new Date(dt * 1000);
  const changeUnit = () => {
    setUnit(unit === 'c' ? 'f' : 'c');
  }
  console.log(unit);
  const day = ['일', '월', '화', '수', '목', '금', '토'];
  return (
    <>
      <section>
        <h2 className="text-muted">{name}</h2>
        <article className="text-muted contents">
          <time>{time.toDateString()}</time>
          <p>{weather[0].description}</p>
        </article>
      </section>
      <section className="grid-contents">
        <article className="weather">
          <p><StateIcon icon={weather[0].icon}></StateIcon></p>
          <p className="temparature" onClick={()=>changeUnit()}>
            {Math.round(unit === 'c' ? main.temp : main.temp * 9 / 5 + 32)}
              <span className={unit === 'c' ? 'clickable' : "hidetemp"}>ºC</span>
              <span className={unit === 'f' ? 'clickable' : "hidetemp"}>ºF</span>
          </p>
        </article>
        <article className="additional-info">
          <p>강수량</p>
          <p>적설량</p>
          <p>습도</p>
          <p>풍속 : {wind.speed}m/s</p>
        </article>
      </section>
    </>
  );
};

export default Current;