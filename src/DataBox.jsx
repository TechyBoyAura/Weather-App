import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import "./DataBox.css";

export default function DataBox({ info }) {
  const INIT_URL =
    "https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg";

  const HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo12pHoOgD5krbTYivP_zldlfK_rnU795Lhg&s";
  const COLD_URL =
    "https://media.istockphoto.com/id/637409946/photo/thermometer-on-snow-shows-low-temperatures-under-zero.jpg?s=612x612&w=0&k=20&c=fmRJtO3RRIMA6TV3JI93CSlteBTrQI1PAjmWaRLiBlA=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

  return (
    <div className="DataBox">
      <h1>WeatherInfo - {info.weather}</h1>
      <div className="OuterBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              <br></br>
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature = {info.temp} &deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>Min Temp = {info.tempMin} &deg;C</div>
              <div>Max Temp = {info.tempMax} &deg;C</div>
              <div>
                Feels Like = {info.feelsLike} &deg;C and described as{" "}
                <b> {info.weather}</b>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
