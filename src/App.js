import React, { useState } from 'react';
import { GlobalStyle, Header, Container, BoxCity, Footer, Block, Credits } from './styles';
import Time from './Components/time';
import Card from './Components/card';
import TemperatureInfo from './Components/temperature';
import axios from 'axios';

const ApiKey = 'cb16dfde662947c390936e1f0de36250';

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [loadDisplay, setLoadDisplay] = useState(false);
  const [temp, setTemp] = useState(0);
  const [weatherInfo, setWeatherInfo] = useState('');
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [icon, setIcon] = useState('');

  const [temp1, setTemp1] = useState(0);
  const [temp2, setTemp2] = useState(0);
  const [temp3, setTemp3] = useState(0);
  const [temp4, setTemp4] = useState(0);
  const [temp5, setTemp5] = useState(0);

  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [date3, setDate3] = useState('');
  const [date4, setDate4] = useState('');
  const [date5, setDate5] = useState('');

  const [icon1, setIcon1] = useState('');
  const [icon2, setIcon2] = useState('');
  const [icon3, setIcon3] = useState('');
  const [icon4, setIcon4] = useState('');
  const [icon5, setIcon5] = useState('');

  async function getLocation() {
    if (window.navigator.geolocation) { 
      await navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setLoadDisplay(true);
      });
    }
  }

  getLocation();

  async function getWeatherLocation () {
    if(cityName === '') {

      let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=${ApiKey}`);
      let forecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=${ApiKey}`);
      let temp = res.data.main.temp - 273.15;
      setCityName(res.data.name);
      setCountryName(res.data.sys.country);
      setWeatherInfo(res.data.weather[0].description);
      setIcon(res.data.weather[0].icon);
      setTemp(temp.toFixed(0));

      setTemp1(forecast.data.list[7].main.temp - 273.15);
      setDate1(forecast.data.list[7].dt);
      setIcon1(forecast.data.list[7].weather[0].icon);

      setTemp2(forecast.data.list[15].main.temp - 273.15);
      setDate2(forecast.data.list[15].dt);
      setIcon2(forecast.data.list[15].weather[0].icon);

      setTemp3(forecast.data.list[23].main.temp - 273.15);
      setDate3(forecast.data.list[23].dt);
      setIcon3(forecast.data.list[23].weather[0].icon);

      setTemp4(forecast.data.list[31].main.temp - 273.15);
      setDate4(forecast.data.list[31].dt);
      setIcon4(forecast.data.list[31].weather[0].icon);

      setTemp5(forecast.data.list[39].main.temp - 273.15);
      setDate5(forecast.data.list[39].dt);
      setIcon5(forecast.data.list[39].weather[0].icon);

    }                              
  }

  if(loadDisplay === true){
    getWeatherLocation();
  }
  

  function keyPress(e){
    if(e.keyCode === 13){
       getWeather(e);
    }
  }

  const getWeather = async (e) => {
    const city = e.target.value;
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${ApiKey}`);
    let forecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=pt_br&appid=${ApiKey}`);
    let temp = res.data.main.temp - 273.15;
    setCityName(res.data.name);
    setCountryName(res.data.sys.country);
    setWeatherInfo(res.data.weather[0].description);
    setIcon(res.data.weather[0].icon);
    setTemp(temp.toFixed(0));                              

  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Container>
          <h1>Wheater</h1>
          <input placeholder='Pesquisar cidade' onKeyDown={keyPress}></input>
          <Time />
        </Container>
        <BoxCity>
          <h2>{cityName}, {countryName}</h2>
          <TemperatureInfo temp={temp} info={weatherInfo} icon={icon} />
        </BoxCity>
      </Header>
      <Footer>
        <h2>Próximos dias</h2>
        <Block>
          <Card temp={temp1.toFixed(0)} date={ date1 } icon={ icon1 }/>
          <Card temp={temp2.toFixed(0)} date={ date2 } icon={ icon2 }/>
          <Card temp={temp3.toFixed(0)} date={ date3 } icon={ icon3 }/>
          <Card temp={temp4.toFixed(0)} date={ date4 } icon={ icon4 }/>
          <Card temp={temp5.toFixed(0)} date={ date5 } icon={ icon5 }/>
        </Block>
        <Credits>
          Desenvolvido por Tiago Gomes
        </Credits>
      </Footer>
    </div>
  );
}

export default App;
