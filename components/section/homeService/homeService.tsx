
"use client";

import Image from "next/image";
import styles from "../homeService/homeService.module.css";
import { useRef } from "react";
import gsap from "gsap";

export default function HomeSection() {
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  const subWrapperRef = useRef<HTMLDivElement>(null);

  const zoomIn = (el: HTMLDivElement | null) => {
    if (!el) return;
    gsap.to(el, {
      scale: 1.1,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  const zoomOut = (el: HTMLDivElement | null) => {
    if (!el) return;
    gsap.to(el, {
      scale: 1,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  return (
    <section className={styles.homeSec}>
      <div className={styles.container}>
        <div className={styles.homeWrapper}>

          {/* LEFT IMAGE */}
          <div
            className={styles.leftCol}
            onMouseEnter={() => zoomIn(mainWrapperRef.current)}
            onMouseLeave={() => zoomOut(mainWrapperRef.current)}
          >
            <div className={styles.homeImg}>
              {/* 👉 wrapper GSAP animates */}
              <div ref={mainWrapperRef} className={styles.zoomWrapper}>
                <Image
                  src="/images/Rectangle 7.png"
                  alt="Home service"
                  fill
                  priority
                  className={styles.mainImg}
                />
              </div>

              <div className={styles.backCircle}>
                <div className={styles.innerCircle}></div>
              </div>

              <div className={styles.imgBox}>
                <p>Best Local Services for your business and home</p>
                <div className={styles.iconBox}>
                  <Image
                    src="/images/homeicon.png"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={styles.homeSubImg}
            onMouseEnter={() => zoomIn(subWrapperRef.current)}
            onMouseLeave={() => zoomOut(subWrapperRef.current)}
          >
            <div ref={subWrapperRef} className={styles.zoomWrapper}>
              <Image
                src="/images/Rectangle 8.png"
                alt="Sub service"
                fill
                className={styles.subImg}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





// "use client";

// import Image from "next/image";
// import styles from "../homeService/homeService.module.css";

// export default function HomeSection() {
//   return (
//     <section className={styles.homeSec}>
//       <div className={styles.container}>
//         <div className={styles.homeWrapper}>

//           {/* LEFT IMAGE */}
//           <div className={styles.leftCol}>
//             <div className={styles.homeImg}>
//               <Image
//                 src="/images/Rectangle 7.png"
//                 alt="Home service"
//                 fill
//                 priority
//                 className={styles.mainImg}
//               />

//               <div className={styles.backCircle}>
//                 <div className={styles.innerCircle}></div>
//               </div>

//               <div className={styles.imgBox}>
//                 <p>Best Local Services for your business and home</p>
//                 <div className={styles.iconBox}>
//                   <Image
//                     src="/images/homeicon.png"
//                     alt="icon"
//                     width={26}
//                     height={26}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className={styles.rightCol}>
//             <div className={styles.homeCont}>
//               <h2>Keeping Your Home Services</h2>
//               <h3>ABOUT COMPANY</h3>
//               <p>
//                 We have a wide spectrum of expertise in web solutions within
//                 these industries, giving us the necessary skills and knowledge
//                 to help you increase your presence on the web. Through our
//                 expertise, technological knowledge, global presence and bespoke
//                 web solutions, we help transform your business, maximize
//                 performance and surpass the competition.
//               </p>
//             </div>

//             <div className={styles.homeSubImg}>
//               <Image
//                 src="/images/Rectangle 8.png"
//                 alt="Sub service"
//                 fill
//                 className={styles.subImg}
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
