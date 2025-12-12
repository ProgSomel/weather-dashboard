import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Favourite from "./Favourite";
import FavouriteListModal from "./FavouriteListModal";

export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite onShow={() => setShowFavModal(!showFavModal)} />
          <FavouriteListModal isOpen={showFavModal} />
        </div>
      </nav>
    </header>
  );
}
