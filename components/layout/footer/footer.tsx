// "use client";

// import Image from "next/image";
// // import styles from "./footer.module.css";
// import styles from "../footer/footer.module.css"
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
//   FaXTwitter,
//   FaArrowRight,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className={styles.footerSec}>
//       <div className={styles.container}>

//         {/* NEWSLETTER */}
//         <div className={styles.footerHeader}>
//           Subscribe Our Newsletter
//         </div>

//         <form className={styles.footerForm}>
//           <div className={styles.footerFormCont}>
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               className={styles.email}
//             />
//             <button type="submit" className={styles.submit}>
//               Subscribe <FaArrowRight />
//             </button>
//           </div>
//         </form>

//         {/* MAIN GRID */}
//         <div className={styles.footerGrid}>

//           {/* LOGO + ABOUT */}
//           <div>
//             <div className={styles.footerLogo}>
//               <Image
//                 src="/images/Group 1000004670.png"
//                 alt="LocalPro"
//                 width={52}
//                 height={52}
//               />
//             </div>

//             <p className={styles.footerDesc}>
//               LocalPro is your trusted platform for booking reliable home
//               services—anytime, anywhere. Whether you need a plumber,
//               electrician, technician,
//             </p>

//             <div className={styles.footerSocial}>
//               <a href="https://www.facebook.com/LocalProServices"><FaFacebookF /></a>
//               <a href="https://www.linkedin.com/company/localpro-services"><FaLinkedinIn /></a>
//               <a href="https://www.youtube.com/@LocalProServices"><FaYoutube /></a>
//               <a href="https://x.com/LocalProServices"><FaXTwitter /></a>
//             </div>
//           </div>

//           {/* SITE LINKS */}
//           <div>
//             <div className={styles.footerContHeader}>Site Links</div>
//             <ul>
//               <li><a className={styles.footerLink} href="#">Blog</a></li>
//               <li><a className={styles.footerLink} href="#">Contact Us</a></li>
//               <li><a className={styles.footerLink} href="#">Jobs</a></li>
//               <li><a className={styles.footerLink} href="#">Categories</a></li>
//             </ul>
//           </div>

//           {/* CITIES */}
//           <div>
//             <div className={styles.footerContHeader}>Popular Cities</div>
//             <ul>
//               <li><a className={styles.footerLink}>Delhi</a></li>
//               <li><a className={styles.footerLink}>Mumbai</a></li>
//               <li><a className={styles.footerLink}>Kolkata</a></li>
//               <li><a className={styles.footerLink}>Bengaluru</a></li>
//             </ul>
//           </div>

//           {/* CATEGORIES */}
//           <div>
//             <div className={styles.footerContHeader}>Categories</div>
//             <ul>
//               <li><a className={styles.footerLink}>Plumber</a></li>
//               <li><a className={styles.footerLink}>House Cleaning</a></li>
//               <li><a className={styles.footerLink}>Electrician</a></li>
//               <li><a className={styles.footerLink}>AC Technician</a></li>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <div className={styles.footerContHeader}>Contact Info</div>
//             <ul>
//               <li><a className={styles.footerLink}>India</a></li>
//               <li>
//                 <a className={styles.footerLink}>
//                   <FaPhone /> +91 7428730894
//                 </a>
//               </li>
//               <li>
//                 <a className={styles.footerLink}>
//                   <FaPhone /> +91 35564 84550
//                 </a>
//               </li>
//               <li>
//                 <a className={styles.footerLink}>
//                   <FaEnvelope /> localpro.services.kolkata@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* LOWER BAR */}
//         <div className={styles.footerLower}>
//           <div className={styles.sideBox}>
//             <a>Copyright 2025</a>
//             <a>Aone Theme. All Right Reserved</a>
//           </div>

//           <div className={styles.paymentIcons}>
//             {["image 72.png", "card-img2.png", "736785 2.png", "image 71.png"].map(
//               (img, i) => (
//                 <Image
//                   key={i}
//                   src={`/images/${img}`}
//                   alt="payment"
//                   width={35}
//                   height={20}
//                 />
//               )
//             )}
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }









"use client";

import Image from "next/image";
import styles from "../footer/footer.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footerSec}>
      <div className={styles.container}>

        {/* NEWSLETTER */}
        <div className={styles.footerHeader}>
          Subscribe Our Newsletter
        </div>

        <form className={styles.footerForm}>
          <div className={styles.footerFormCont}>
            <input
              type="email"
              placeholder="Enter Your Email"
              className={styles.email}
            />
            <button type="submit" className={styles.submit}>
              Subscribe <FaArrowRight />
            </button>
          </div>
        </form>

        {/* MAIN GRID */}
        <div className={styles.footerGrid}>

          {/* LOGO + ABOUT */}
          <div>
            <div className={styles.footerLogo}>
              <Image
                src="/images/Group 1000004670.png"
                alt="LocalPro"
                width={52}
                height={52}
              />
            </div>

            <p className={styles.footerDesc}>
              LocalPro is your trusted platform for booking reliable home
              services—anytime, anywhere. Whether you need a plumber,
              electrician, technician,
            </p>

            <div className={styles.footerSocial}>
              <a href="https://www.facebook.com/LocalProServices">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/localpro-services">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@LocalProServices">
                <FaYoutube />
              </a>
              <a href="https://x.com/LocalProServices">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* SITE LINKS */}
          <div>
            <div className={styles.footerContHeader}>Site Links</div>
            <ul>
              <li><a className={styles.footerLink} href="#">Blog</a></li>
              <li><a className={styles.footerLink} href="#">Contact Us</a></li>
              <li><a className={styles.footerLink} href="#">Jobs</a></li>
              <li><a className={styles.footerLink} href="#">Categories</a></li>
            </ul>
          </div>

          {/* POPULAR PLACES */}
          <div>
            <div className={styles.footerContHeader}>Popular Places</div>
            <ul>
              <li><a className={styles.footerLink}>Salt Lake</a></li>
              <li><a className={styles.footerLink}>Newtown</a></li>
              <li><a className={styles.footerLink}>Greater Kolkata</a></li>
              <li><a className={styles.footerLink}>South Kolkata</a></li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <div className={styles.footerContHeader}>Categories</div>
            <ul>
              <li><a className={styles.footerLink}>Plumber</a></li>
              <li><a className={styles.footerLink}>House Cleaning</a></li>
              <li><a className={styles.footerLink}>Electrician</a></li>
              <li><a className={styles.footerLink}>AC Technician</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className={styles.footerContHeader}>Contact Info</div>
            <ul>
              <li>
                <a className={styles.footerLink}>India</a>
              </li>

              <li>
                <a
                  href="tel:+917428730894"
                  className={styles.footerLink}
                >
                  <FaPhone /> +91 7428730894
                </a>
              </li>

              <li>
                <a
                  href="tel:+913556484550"
                  className={styles.footerLink}
                >
                  <FaPhone /> +91 35564 84550
                </a>
              </li>

              <li>
                <a
                  href="mailto:localpro.services.kolkata@gmail.com"
                  className={styles.footerLink}
                >
                  <FaEnvelope /> localpro.services.kolkata@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* LOWER BAR */}
        <div className={styles.footerLower}>
          <div className={styles.sideBox}>
            <a>Copyright 2025</a>
            <a>Aone Theme. All Right Reserved</a>
          </div>

          {/* PAYMENT ICONS — FIXED DESIGN */}
          <div className={styles.paymentIcons}>
            {[
              "image 72.png",
              "card-img2.png",
              "736785 2.png",
              "image 71.png",
            ].map((img, i) => (
              <div key={i} className={styles.paymentIconBox}>
                <Image
                  src={`/images/${img}`}
                  alt="payment"
                  fill
                  className={styles.paymentIconImg}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
