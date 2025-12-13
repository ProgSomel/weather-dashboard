const getImgURL = (fileName) => {
  return new URL(`../assets/backgrounds/${fileName}`, import.meta.url).href;
};

const weatherToImg = {
  // Clear conditions
  Clear: "clear-sky.jpg",
  Sunny: "clear-sky.jpg",

  // Cloudy conditions
  Clouds: "few-clouds.jpg",
  "Few Clouds": "few-clouds.jpg",
  "Scattered Clouds": "scattered-clouds.jpg",
  Overcast: "scattered-clouds.jpg",

  // Rainy conditions
  Rain: "rainy-day.jpg",
  Drizzle: "rainy-day.jpg",
  "Light Rain": "rainy-day.jpg",

  // Stormy conditions
  Thunderstorm: "thunderstorm.jpg",
  Storm: "thunderstorm.jpg",

  // Snowy conditions
  Snow: "sunny.jpg",
  Sleet: "sunny.jpg",

  // Misty/Foggy conditions
  Mist: "mist.jpeg",
  Fog: "mist.jpeg",
  Haze: "mist.jpeg",
  Smoke: "mist.jpeg",

  // Winter conditions
  Winter: "winter.jpg",
};

export const getBackgroundImg = (climate) => {
  if (!climate) return getImgURL("clear-sky.jpg");

  const fileName = weatherToImg[climate];
  return getImgURL(fileName || "clear-sky.jpg");
};
