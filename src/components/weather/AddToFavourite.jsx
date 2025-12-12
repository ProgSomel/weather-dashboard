import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../Context";
import RedHeartIcon from "../../assets/heart-red.svg";

export default function AddToFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);

  const [isFavourite, toggleFavourite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  const checkIsFavourite = useEffectEvent(() => {
    const found = favourites?.find((fav) => fav.location === location);
    toggleFavourite(found);
  });

  useEffect(() => {
    checkIsFavourite();
  }, [favourites]);

  function handleFavourites() {
    const found = favourites?.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex 
        items-center space-x-2 px-3 
        py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
          onClick={handleFavourites}
        >
          <span>
            {isFavourite ? "Remove from Favourite" : "Add to Favourite"}
          </span>
          <img
            src={isFavourite ? RedHeartIcon : HeartIcon}
            alt="addToFavouriteIcon"
          />
        </button>
      </div>
    </div>
  );
}
