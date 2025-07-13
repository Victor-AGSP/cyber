import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/carrusel.css';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg', alt: 'Linux' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Metasploit_logo.png', alt: 'Metasploit' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Logo_Wireshark.png', alt: 'Wireshark' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Nmap-logo.svg', alt: 'Nmap' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Burp_Suite_logo.png', alt: 'Burp Suite' },
];

function Carrusel() {
  return (
    <section className="carrusel">
      <h2>🔗 Herramientas y Partners</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="carrusel-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carrusel;
