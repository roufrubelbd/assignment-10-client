import  { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { AuthContext } from "../../main";
import Spinner from "../Spinner/Spinner";

const Slider = () => {
  const { loading } = use(AuthContext);

  const slides = [
    {
      id: 1,
      image: "https://i.postimg.cc/CLjX3YG0/ban1.png",
      title: "Upgrade Your Digital Lifestyle",
      subtitle:
        "Explore the latest laptops, wearables, and accessories in one place.",
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
      subtitle:
        "Experience cutting-edge devices built for performance and style.",
    },
  ];

  if (loading) return <Spinner />;

  return (
    <div className="py-2">
      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* SLIDE WRAPPER */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-[40vh] px-6">
              {/* LEFT IMAGE */}
              <div className="overflow-hidden rounded">
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="relative z-10 max-w-lg">
                <h2 className="text-xl md:text-2xl font-bold text-info leading-tight">
                  {slide.title}
                </h2>

                <p className="mt-4 text-gray-600">{slide.subtitle}</p>

                <Link to="/products">
                  <button className="mt-4 btn btn-info btn-xs px-2">
                    Jump on Store →
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
