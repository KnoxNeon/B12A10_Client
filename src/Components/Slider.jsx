import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper w-full h-[200px] md:h-[300px] lg:h-[500px] "
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className="relative">
          <img
            src="../1.jpg"
            alt="Slide 1 background"
            className="absolute inset-0 w-full object-fit"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute z-10 px-4 lg:px-8 pt-30 lg:py-40 text-white">
            <div className="title text-xl md:text-3xl lg:text-6xl font-bold">“Find Your <br /> Furry Friend Today!"</div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="../2.png"
            alt="Slide 1 background"
            className="absolute inset-0 w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute z-10 px-4 lg:px-8 pt-30 lg:py-40 text-white">
            <div className="title text-xl md:text-3xl lg:text-6xl font-bold">“Adopt, Don’t Shop <br /> — Give a Pet a Home.”</div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="../3.jpg"
            alt="Slide 1 background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute z-10 px-4 lg:px-8 pt-30 lg:py-40 text-white">
            <div className="title text-xl md:text-3xl lg:text-6xl font-bold">“Because Every Pet <br />— Deserves Love and Care.”</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider
