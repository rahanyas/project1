import { Heart } from "lucide-react";
import { sampleProducts } from "../utils/sampleProducts,js";

const Products = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4">
      {sampleProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col relative"
        >
          {/* Wishlist icon */}
          <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:shadow-md">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>

          {/* Content Layout */}
          <div className="flex flex-row p-4 gap-4">
            {/* Image Left */}
            <div className="w-28 sm:w-32 flex items-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-28 sm:h-32 w-full"
              />
            </div>

            {/* Details Right */}
            <div className="flex flex-col justify-between flex-1 text-left">
              {/* Title */}
              <h2 className="text-base font-semibold text-gray-800 line-clamp-3">{product.title}</h2>

              {/* Pricing */}
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-500 line-through">{product.mrp}</p>
                <p className="text-green-600 font-bold">{product.discountedPrice}</p>
                <p className="text-red-500 font-medium">{product.discount} OFF</p>
              </div>
            </div>
          </div>

          {/* Buy Now CTA */}
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 pb-4 pt-2 mt-auto"
          >
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Buy Now
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Products;
