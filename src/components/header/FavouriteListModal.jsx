import React, { useContext } from "react";
import { FavouriteContext } from "../../Context";

export default function FavouriteListModal({ isOpen }) {
  const { favourites } = useContext(FavouriteContext);
  return (
    <div
      className={`
          max-w-xs py-4 bg-white rounded-md border-gray-500 absolute 
    right-0 top-16 text-black shadow-lg transition-all duration-700
    ${
      isOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible pointer-events-none -translate-y-2"
    }
        `}
    >
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites?.length > 0 ? (
          favourites?.map((fav) => (
            <li className="hover:bg-gray-200">{fav.location}</li>
          ))
        ) : (
          <p className="text-red-500">Nothing is added to Favourite</p>
        )}
      </ul>
    </div>
  );
}
