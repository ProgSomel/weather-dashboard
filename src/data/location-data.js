const data = [
  {
    location: "Kabul, Afghanistan",
    latitude: 34.5553,
    longitude: 69.2075,
  },
  {
    location: "Tirana, Albania",
    latitude: 41.3275,
    longitude: 19.8187,
  },
  {
    location: "Algiers, Algeria",
    latitude: 36.7538,
    longitude: 3.0588,
  },
  {
    location: "Buenos Aires, Argentina",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    location: "Canberra, Australia",
    latitude: -35.2809,
    longitude: 149.13,
  },
  {
    location: "Vienna, Austria",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    location: "Dhaka, Bangladesh",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: "Brussels, Belgium",
    latitude: 50.8503,
    longitude: 4.3517,
  },
  {
    location: "Brasília, Brazil",
    latitude: -15.8267,
    longitude: -47.9218,
  },
  {
    location: "Ottawa, Canada",
    latitude: 45.4215,
    longitude: -75.6972,
  },
  {
    location: "Beijing, China",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Bogotá, Colombia",
    latitude: 4.711,
    longitude: -74.0721,
  },
  {
    location: "Cairo, Egypt",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Paris, France",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Berlin, Germany",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Athens, Greece",
    latitude: 37.9838,
    longitude: 23.7275,
  },
  {
    location: "New Delhi, India",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    location: "Jakarta, Indonesia",
    latitude: -6.2088,
    longitude: 106.8456,
  },
  {
    location: "Tehran, Iran",
    latitude: 35.6892,
    longitude: 51.389,
  },
  {
    location: "Baghdad, Iraq",
    latitude: 33.3152,
    longitude: 44.3661,
  },
  {
    location: "Dublin, Ireland",
    latitude: 53.3498,
    longitude: -6.2603,
  },
  {
    location: "Rome, Italy",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Tokyo, Japan",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    location: "Nairobi, Kenya",
    latitude: -1.2921,
    longitude: 36.8219,
  },
  {
    location: "Seoul, South Korea",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "Mexico City, Mexico",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    location: "Amsterdam, Netherlands",
    latitude: 52.3676,
    longitude: 4.9041,
  },
  {
    location: "Wellington, New Zealand",
    latitude: -41.2865,
    longitude: 174.7762,
  },
  {
    location: "Abuja, Nigeria",
    latitude: 9.0765,
    longitude: 7.3986,
  },
  {
    location: "Oslo, Norway",
    latitude: 59.9139,
    longitude: 10.7522,
  },
  {
    location: "Islamabad, Pakistan",
    latitude: 33.6844,
    longitude: 73.0479,
  },
  {
    location: "Warsaw, Poland",
    latitude: 52.2297,
    longitude: 21.0122,
  },
  {
    location: "Lisbon, Portugal",
    latitude: 38.7223,
    longitude: -9.1393,
  },
  {
    location: "Doha, Qatar",
    latitude: 25.2854,
    longitude: 51.531,
  },
  {
    location: "Moscow, Russia",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    location: "Riyadh, Saudi Arabia",
    latitude: 24.7136,
    longitude: 46.6753,
  },
  {
    location: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    location: "Pretoria, South Africa",
    latitude: -25.7479,
    longitude: 28.2293,
  },
  {
    location: "Madrid, Spain",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  {
    location: "Stockholm, Sweden",
    latitude: 59.3293,
    longitude: 18.0686,
  },
  {
    location: "Bern, Switzerland",
    latitude: 46.948,
    longitude: 7.4474,
  },
  {
    location: "Bangkok, Thailand",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    location: "Ankara, Turkey",
    latitude: 39.9334,
    longitude: 32.8597,
  },
  {
    location: "Abu Dhabi, UAE",
    latitude: 24.4539,
    longitude: 54.3773,
  },
  {
    location: "London, United Kingdom",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "Washington D.C., USA",
    latitude: 38.9072,
    longitude: -77.0369,
  },
  {
    location: "Caracas, Venezuela",
    latitude: 10.4806,
    longitude: -66.9036,
  },
  {
    location: "Hanoi, Vietnam",
    latitude: 21.0285,
    longitude: 105.8542,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const searchLower = location.toLowerCase().trim();

  // 1. try exact match first
  let found = data.find((item) => item.location.toLowerCase() === searchLower);

  // 2. try matching city name only
  if (!found) {
    found = data.find((item) => {
      const cityName = item.location.split(",")[0].toLowerCase().trim();
      return cityName === searchLower;
    });
  }

  // 3. try partial matching
  if (!found) {
    found = data.find((item) =>
      item.location.toLowerCase().includes(searchLower)
    );
  }

  return (
    found || {
      location: "",
      latitude: 0,
      longitude: 0,
    }
  );
}

export { getLocationByName, getLocations };
