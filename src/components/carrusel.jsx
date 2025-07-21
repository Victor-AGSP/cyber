import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/carrusel.css';

// Los logos ahora se buscan en /public/logos/
const logos = [
  {
    src: '/images/logos/linux.png',
    alt: 'Linux',
    href: 'https://www.kernel.org/',
  },
  {
    src: '/images/logos/metasploit.png',
    alt: 'Metasploit',
    href: 'https://www.metasploit.com/',
  },
  {
    src: '/images/logos/wireshark.png',
    alt: 'Wireshark',
    href: 'https://www.wireshark.org/',
  },
  {
    src: '/images/logos/nmap.png',
    alt: 'Nmap',
    href: 'https://nmap.org/',
  },
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
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo.src} alt={logo.alt} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carrusel;
