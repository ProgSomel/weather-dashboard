import React, { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./Context";
import { getBackgroundImg } from "./utils/getBackgroundImg";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);

  const backGroundStyle = {
    backgroundImage: `url(${getBackgroundImg(weatherData.climate)})`,
    backGroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {loading.state ? (
        <div className="flex  rounded-md p-8 mt-14 mx-auto h-screen items-center justify-center">
          <p>{loading.message}</p>
        </div>
      ) : (
        <div
          className="grid place-items-center h-screen"
          style={backGroundStyle}
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
