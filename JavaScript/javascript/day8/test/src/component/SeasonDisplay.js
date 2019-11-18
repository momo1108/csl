import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        msg: '더위 조심하세요',
        icon: 'sun'
    },
    winter: {
        msg: '따뜻하게 입으세요',
        icon: 'snowflake'        
    }
}

const getSeason = (lat, month) => {
    if (month>3 && month<9) {
        return lat>0?'summer':'winter'
    } else {
        return lat>0?'winter':'summer'
    }
}

const SeasonDisplay = (props) => {
    const month = new Date().getMonth();
    const season = getSeason(props.lat, month);
    const { msg, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <p>위도 : {props.lat}</p>
            <p>
                <i className={`icon ${icon} huge`} />
                계절 : {season}
            </p>
            <p>
                <i className={`icon ${icon} huge`} />
                {msg}
            </p>
        </div>
    )
}

export default SeasonDisplay;