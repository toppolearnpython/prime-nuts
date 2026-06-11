"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// ✅ React Icons
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { MdLocalGroceryStore } from "react-icons/md";

import products from "../../data/products.json";
import banners from "../../data/banners.json";

export default function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="px-8 py-12">
      {/* Banner Section */}
      <div className="mb-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="banner-swiper"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.title}>
              <div className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] xl:h-[600px] relative">
  <Image
    src={banner.image}
    alt={banner.title}
    fill
    className="object-contain bg-black rounded-lg"
  />
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Us Section */}
<section className="mb-12 bg-green-50 p-8 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-green-800 mb-4">About Us</h2>
  <p className="text-gray-700 leading-relaxed">
    At <span className="font-semibold">Prime Nuts‑Natural</span>, we’re passionate
    about delivering nature’s best in every bite. Our premium nuts and seeds are
    carefully sourced, roasted with precision, and crafted to fuel your day with
    taste and nutrition.
  </p>
  <p className="text-gray-700 leading-relaxed mt-4">
    Whether you’re on the go or relaxing at home, Prime Nuts‑Natural is your
    trusted companion for wholesome, flavorful snacking.
  </p>
</section>

      {/* Products Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      {/* Product Carousel */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="outer-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:scale-105 transition-transform">
              {/* Inner Swiper for product images */}
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="inner-swiper"
              >
                {product.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
  src={img}
  alt={`${product.name} ${idx}`}
  width={400}
  height={400}
  className="object-contain w-full h-40 sm:h-48 md:h-64 lg:h-80 xl:h-[400px] bg-gray-100"
/>

                  </SwiperSlide>
                ))}
              </Swiper>

              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => openModal(product)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Buy Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6 text-center">
            <Dialog.Title className="text-xl font-bold mb-4">
              Buy {selectedProduct?.name}
            </Dialog.Title>
            <div className="flex justify-center space-x-6">
              {selectedProduct?.amazonLink && (
                <a
                  href={selectedProduct.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500"
                >
                  <FaAmazon size={24} />
                </a>
              )}
              {selectedProduct?.flipkartLink && (
                <a
                  href={selectedProduct.flipkartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600"
                >
                  <SiFlipkart size={24} />
                </a>
              )}
              {selectedProduct?.blinkitLink && (
                <a
                  href={selectedProduct.blinkitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600"
                >
                  <MdLocalGroceryStore size={24} />
                </a>
              )}
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
