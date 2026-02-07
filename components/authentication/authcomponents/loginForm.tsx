"use client";

import { useState } from "react";
import styles from "./auth.module.css";
import GoogleAuth from "./googleAuth";
import AppleAuth from "./appleAuth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { authLoginOtp } from "@/redux/slice/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

/* ================= Yup Schema ================= */

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const [provider, setProvider] = useState<"google" | "apple" | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* Toast validation errors */
  const onError = (errors: any) => {
    const firstError = Object.values(errors)[0] as any;
    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  /* Submit login → send OTP */
  const onSubmit = async (data: any) => {
    const response: any = await dispatch(authLoginOtp(data));

    if (response?.payload?.status) {
      router.push("/auth/otp");
    } else {
      toast.error(response?.payload?.message || "Login failed");
    }
  };

  return (
    <>
      <h1 className={styles.title}>Login to your account</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <input
          className={styles.input}
          type="email"
          placeholder="Enter Your Email"
          {...register("email")}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email.message}</p>
        )}

        <input
          className={styles.input}
          type="password"
          placeholder="Enter Your Password"
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        <div className={styles.socialRow}>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={() => setProvider("google")}
          >
            Google
          </button>
        </div>

        <button className={styles.logModalBtn}>
          Login Now
        </button>
      </form>

      {provider === "google" && (
        <GoogleAuth onClose={() => setProvider(null)} />
      )}

      {provider === "apple" && (
        <AppleAuth onClose={() => setProvider(null)} />
      )}
    </>
  );
}

















// "use client";
// import { useState } from "react";
// import styles from "./auth.module.css";
// import GoogleAuth from "./googleAuth";
// import AppleAuth from "./appleAuth";

// export default function LoginForm() {
//   const [provider, setProvider] = useState<"google" | "apple" | null>(null);

//   return (
//     <>
//       <h1 className={styles.title}>Login to your account</h1>

//       <form className={styles.form}>
//         <input
//           className={styles.input}
//           type="email"
//           placeholder="Enter Your Email"
//         />
//         <input
//           className={styles.input}
//           type="password"
//           placeholder="Enter Your Password"
//         />

//         <div className={styles.socialRow}>
//           {/* <button
//             type="button"
//             className={styles.appleBtn}
//             onClick={() => setProvider("apple")}
//           >
//             Apple
//           </button> */}

//           <button
//             type="button"
//             className={styles.googleBtn}
//             onClick={() => setProvider("google")}
//           >
//             Google
//           </button>
//         </div>

//         <button className={styles.logModalBtn}>
//           Login Now
//         </button>
//       </form>

//       {/* Modals */}
//       {provider === "google" && (
//         <GoogleAuth onClose={() => setProvider(null)} />
//       )}

//       {provider === "apple" && (
//         <AppleAuth onClose={() => setProvider(null)} />
//       )}
//     </>
//   );
// }


