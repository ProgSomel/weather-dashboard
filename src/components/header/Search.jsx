import React, { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../Context";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState("");

  const doSearch = useDebounce((term) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    const fetchedLocation = getLocationByName(trimmed);
    if (fetchedLocation.latitude === 0 && fetchedLocation.longitude === 0) {
      console.log(`Location "${trimmed} not found"`);
      return;
    }
    setSelectedLocation(fetchedLocation);
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // ✅ Prevent page refresh

    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    const fetchedLocation = getLocationByName(trimmed);

    if (fetchedLocation.latitude === 0 && fetchedLocation.longitude === 0) {
      alert(
        `Location "${trimmed}" not found. Try: "Tokyo", "Paris", or "Dhaka"`
      );
      return;
    }

    setSelectedLocation(fetchedLocation);
    setSearchTerm(""); // ✅ Clear input after successful search
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
}
