import { FavouriteContext } from "../Context";
import useLocalStorage from "../hooks/useLocalStorage";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites?.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext>
  );
};

export default FavouriteProvider;
