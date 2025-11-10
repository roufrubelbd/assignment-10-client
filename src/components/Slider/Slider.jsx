import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Slider = () => {

  const slides = [
  {
    id: 1,
    image: "https://i.postimg.cc/CLjX3YG0/ban1.png",
    title: "Upgrade Your Digital Lifestyle",
    subtitle: "Explore the latest laptops, wearables, and accessories in one place.",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/B6kR0n7W/ban2.png",
    title: "Innovation Starts Here",
    subtitle: "Discover smart solutions designed for modern professionals.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/BnCWKsb2/ban3.png",
    title: "Future of Technology in Your Hands",
    subtitle: "Experience cutting-edge devices built for performance and style.",
  },
];


  return (
    <div className="container mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
              {/* Background Image with zoom animation */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Link to="/services">
                    <button className="mt-6 btn btn-outline btn-sm px-4 py-1 rounded-full shadow-lg hover:shadow-emerald-400/40 transition-all duration-300">
                      Jump on Store →
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
