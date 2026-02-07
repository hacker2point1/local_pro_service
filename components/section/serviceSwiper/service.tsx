"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "../serviceSwiper/service.module.css";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Plumbing Service",
    text:
      "We have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge to help you increase",
    img: "/images/Group 95.png",
    type: "main",
  },
  {
    title: "Cleaner Service",
    text:
      "From small repairs to large-scale installations our experienced electricians provide tailored solutions to power your home.",
    img: "/images/cardicon.png",
    type: "sub",
  },
  {
    title: "Electrician Service",
    text:
      "Our goal is to be a leader in providing environmentally conscious electrical services.",
    img: "/images/Group 94.png",
    type: "main",
  },
  {
    title: "Plumbing Service",
    text:
      "We have a wide spectrum of expertise in web solutions within these industries.",
    img: "/images/Group 95.png",
    type: "main",
  },
  {
    title: "Painter Service",
    text:
      "From small repairs to large-scale installations our experienced electricians provide tailored solutions.",
    img: "/images/cardclean.png",
    type: "main",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSec}>
      <div className={styles.container}>

        {/* ===== H2 TITLE ===== */}
        <div className={styles.servicesCont}>
          <h2 className={styles.title2}>
            Perfect services without effort!
          </h2>
        </div>

        {/* ===== H3 + BUTTON ROW ===== */}
        <div className={styles.row}>

          <div className={styles.leftCol}>
            <h3 className={styles.title3}>OUR SERVICES</h3>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.servicesBtn}>
              <Link href="/" className={`${styles.homeBtn} ${styles.active}`}>
                Home
              </Link>

              <Link
                href="/business"
                className={`${styles.homeBtn} ${styles.businessBtn}`}
              >
                Business
              </Link>
            </div>
          </div>

        </div>

        {/* ===== SWIPER ===== */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={40}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className={styles.cardSwiper}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i} className={styles.cardSlide}>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardBody}>

                  <div
                    className={
                      service.type === "sub"
                        ? styles.servicesSubImg
                        : styles.servicesCardImg
                    }
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={service.type === "sub" ? 111 : 78}
                      height={78}
                    />
                  </div>

                  <h5 className={styles.servicesCardTitle}>
                    {service.title}
                  </h5>

                  <p className={styles.servicesCardText}>
                    {service.text}
                  </p>

                  <div className={styles.servicesCardBtn}>
                    <Link href="/service" className={styles.learnBtn}>
                      Learn More
                    </Link>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}










// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useRef } from "react";
// import type { Swiper as SwiperType } from "swiper";

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import styles from "../serviceSwiper/service.module.css";
// import "swiper/css";

// const servicesData = [
//   {
//     title: "Plumbing Service",
//     desc:
//       "We have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge to help you increase",
//     img: "/images/Group 95.png",
//     type: "main",
//   },
//   {
//     title: "Cleaner Service",
//     desc:
//       "From small repairs to large-scale installations our experienced electricians provide tailored solutions to power your home.",
//     img: "/images/cardicon.png",
//     type: "sub",
//   },
//   {
//     title: "Electrician Service",
//     desc:
//       "Our goal is to be a leader in providing environmentally conscious electrical services. We focus on energy-efficient solutions.",
//     img: "/images/Group 94.png",
//     type: "main",
//   },
//   {
//     title: "Plumbing Service",
//     desc:
//       "We have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge to help you increase",
//     img: "/images/Group 95.png",
//     type: "main",
//   },
// ];

// export default function ServicesSection() {
//   // ✅ CORRECTLY TYPED REF
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <section className={styles.servicesSec}>
//       <div className={styles.container}>

//         {/* HEADER */}
//         <div className={styles.headerRow}>
//           <h2 className={styles.title2}>
//             Perfect services without effort!
//           </h2>

//           {/* CUSTOM NAVIGATION (WORKING) */}
//           <div className={styles.navButtons}>
//             <button
//               className={styles.navBtn}
//               onClick={() => swiperRef.current?.slidePrev()}
//               aria-label="Previous slide"
//             >
//               <FaArrowLeft />
//             </button>

//             <button
//               className={styles.navBtn}
//               onClick={() => swiperRef.current?.slideNext()}
//               aria-label="Next slide"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* SWIPER */}
//         <Swiper
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           slidesPerView={4}
//           spaceBetween={60}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           className={styles.cardSwiper}
//         >
//           {servicesData.map((service, index) => (
//             <SwiperSlide key={index} className={styles.cardSlide}>
//               <div className={styles.servicesCard}>
//                 <div className={styles.servicesCardBody}>

//                   <div
//                     className={
//                       service.type === "sub"
//                         ? styles.servicesSubImg
//                         : styles.servicesCardImg
//                     }
//                   >
//                     <Image
//                       src={service.img}
//                       alt={service.title}
//                       width={service.type === "sub" ? 111 : 78}
//                       height={78}
//                     />
//                   </div>

//                   <h5 className={styles.servicesCardTitle}>
//                     {service.title}
//                   </h5>

//                   <p className={styles.servicesCardText}>
//                     {service.desc}
//                   </p>

//                   <div className={styles.servicesCardBtn}>
//                     <button className={styles.learnBtn}>
//                       Learn More
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }
