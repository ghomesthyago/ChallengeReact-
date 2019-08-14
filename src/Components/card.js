import React from 'react';
import day from '../assets/day.svg';
import cloudy from '../assets/cloudy.svg';
import rainy from '../assets/rainy-6.svg';
import rainyD from '../assets/rainy-3.svg';
import thunder from '../assets/thunder.svg';
import snowd from '../assets/snowy-1.svg';
import snown from '../assets/snowy-6.svg';
import night from '../assets/night.svg';
import fewCloudsD from '../assets/cloudy-day-1.svg';
import fewCloudsN from '../assets/cloudy-night-1.svg';
import { Title, CardInfo } from '../styles';
import { format } from 'date-fns';

const Card = (props) => {
    const cloud = ['03d', '03n', '04d', '04n'];
    const rain = ['09d', '09n', '10n'];
    let icon = '';
    var a = new Date(props.date * 1000);
    var date = format(
        a,
        'DD/MM/YYYY'
      )
    if(cloud.indexOf(props.icon) !== -1){ icon = cloudy; }
    if(rain.indexOf(props.icon) !== -1){ icon = rainy; }
    if(props.icon === '11d' || props.icon === '11n'){ icon = thunder; }
    if(props.icon === '50d' || props.icon === '50n'){ icon = cloudy; }
    if(props.icon === '01d'){ icon = day; }
    if(props.icon === '01n'){ icon = night; }
    if(props.icon === '02d'){ icon = fewCloudsD; }
    if(props.icon === '02n'){ icon = fewCloudsN; }
    if(props.icon === '13d'){ icon = snowd; }
    if(props.icon === '13n'){ icon = snown; }
    if(props.icon === '10d'){ icon = rainyD; }
    
    return(
        <CardInfo>
            <Title>{ date }</Title>
            <img src={ icon } alt='sun' />
            <Title>{ props.temp }°C</Title>
        </CardInfo>
    );
}

export default Card;