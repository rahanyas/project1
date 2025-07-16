import { Heart, Search, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="border w-full h-20 bg-white relative z-20">
      <div className="flex h-full items-center justify-between px-4">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl uppercase font-bold">Big Sales</h1>

        {/* Right icons + Desktop Search */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Desktop (lg) Search Input */}
          <div
            className={`hidden lg:block transition-all duration-300 overflow-hidden ${
              showSearch ? "w-[250px] opacity-100 scale-x-100" : "w-0 opacity-0 scale-x-0"
            } origin-right`}
          >
            <input
              type="text"
              className="w-full p-2 text-sm border rounded"
              placeholder="Search here"
            />
          </div>

          {/* Search Toggle Button */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            title="Search"
            className="cursor-pointer"
          >
            {showSearch && window.innerWidth < 1024 ? <X size={26} /> : <Search size={26} />}
          </button>

          {/* Wishlist Button */}
          <button title="Wishlist" className="cursor-pointer">
            <Heart size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      {showSearch && (
        <div className="block lg:hidden absolute top-full left-0 w-full bg-white shadow-md p-4 z-10">
          <input
            type="text"
            className="w-full border p-2 rounded text-base focus:outline-none"
            placeholder="Search here..."
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
