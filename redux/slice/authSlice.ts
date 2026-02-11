// "use client";

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "@/api/axios/axios";
// import { toast } from "sonner";
// import { endpoints } from "@/api/endpoints/endpoints";
// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// /* ================= STATE ================= */

// const initialState = {
//   token: null as string | null,
//   email: null as string | null,
//   userId: null as string | null,
//   loading: false,
// };

// /* ================= REGISTER ================= */

// export const authRegistration = createAsyncThunk(
//   "auth/registration",
//   async (payload: any) => {
//     const response = await axiosInstance.post(
//       endpoints.auth.registration,
//       payload
//     );
//     return response.data;
//   }
// );

// /* ================= SIGN IN ================= */

// export const authSignIn = createAsyncThunk(
//   "authSignIn",
//   async (payload: any) => {
//     const response = await axiosInstance.post(
//       endpoints.auth.signIn,
//       payload
//     );
//     return response.data;
//   }
// );

// /* ================= REGISTER OTP ================= */

// export const authLoginOtp = createAsyncThunk(
//   "auth/loginOtp",
//   async (payload: any) => {
//     const response = await axiosInstance.post(
//       endpoints.auth.logInOtp,
//       payload
//     );
//     return response.data;
//   }
// );

// /* ================= VERIFY OTP ================= */

// export const verifyRegisterOtp = createAsyncThunk(
//   "verifyRegisterOtp",
//   async (payload) => {
//     const response = await axiosInstance.post(
//       endpoints.auth.otp,
//       payload
//     );
//     return response.data;
//   }
// );

// /* ================= SLICE ================= */

// const authSlice = createSlice({
//   name: "auth",
//   initialState,

//   reducers: {
//     logout: (state) => {
//       state.token = null;
//       state.email = null;
//       state.userId = null;

  
//       cookies.remove("authToken", { path: "/" });

//       toast.success("Logged out successfully");
//     },
//   },

//   extraReducers: (builder) => {
//     builder

//       /* ===== REGISTER ===== */
//       .addCase(authRegistration.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(authRegistration.fulfilled, (state, action) => {
//         state.loading = false;

//         if (action.payload?.status) {
//           toast.success(action.payload.message || "Registered successfully");
//         } else {
//           toast.error(action.payload?.message || "Registration failed");
//         }
//       })
//       .addCase(authRegistration.rejected, (state, action) => {
//         state.loading = false;
//         toast.error(action.error.message || "Registration error");
//       })

//       /* ===== SIGN IN ===== */
//       .addCase(authSignIn.fulfilled, (_, action) => {
//         if (action.payload?.status) {
//           toast.success(action.payload.message || "Login successful");
//         } else {
//           toast.error(action.payload?.message || "Login failed");
//         }
//       })

//       /* ===== LOGIN OTP ===== */
//       .addCase(authLoginOtp.fulfilled, (_, action) => {
//         if (action.payload?.status) {
//           toast.success("OTP sent successfully");
//         }
//       })

//       /* ===== VERIFY OTP (TOKEN STORAGE HERE) ===== */
//       .addCase(verifyRegisterOtp.fulfilled, (state, action) => {
//         if (action.payload?.status) {
//           const token = action.payload.token;

//           //  Save in Redux state
//           state.token = token;

//           // Save in cookies
//           cookies.set("authToken", token, {
//             path: "/",
//             maxAge: 60 * 60 * 24 * 7, // 7 days
//             sameSite: "lax",
//           });

//           toast.success("Login successful");
//         } else {
//           toast.error("OTP verification failed");
//         }
//       });
//   },
// });

// /* ================= EXPORT ================= */

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;



"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axios/axios";
import { toast } from "sonner";
import { endpoints } from "@/api/endpoints/endpoints";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const initialState = {
token: null as string | null,
email: null as string | null,
userId: null as string | null,
loading: false,
};

/* ================= REGISTER ================= */

export const authRegistration = createAsyncThunk(
"auth/registration",
async (payload: any, { rejectWithValue }) => {
try {
const response = await axiosInstance.post(
endpoints.auth.registration,
payload
);
return response.data;
} catch (error: any) {
return rejectWithValue(error.response?.data);
}
}
);

/* ================= SIGN IN ================= */

export const authSignIn = createAsyncThunk(
"auth/signIn",
async (payload: any) => {
const response = await axiosInstance.post(
endpoints.auth.signIn,
payload
);
return response.data;
}
);

/* ================= LOGIN OTP ================= */

export const authLoginOtp = createAsyncThunk(
"auth/loginOtp",
async (payload: any) => {
const response = await axiosInstance.post(
endpoints.auth.logInOtp,
payload
);
return response.data;
}
);

/* ================= VERIFY OTP ================= */

export const verifyRegisterOtp = createAsyncThunk(
"verifyRegisterOtp",
async (payload: any) => {
const response = await axiosInstance.post(
endpoints.auth.otp, // ✅ make sure this matches backend
payload
);
return response.data;
}
);

/* ================= SLICE ================= */

const authSlice = createSlice({
name: "auth",
initialState,

reducers: {
logout: (state) => {
state.token = null;
state.email = null;
state.userId = null;


  cookies.remove("authToken", { path: "/" });
  toast.success("Logged out successfully");
},


},

extraReducers: (builder) => {
builder
.addCase(authRegistration.pending, (state) => {
state.loading = true;
})
.addCase(authRegistration.fulfilled, (state) => {
state.loading = false;
})
.addCase(authRegistration.rejected, (state) => {
state.loading = false;
toast.error("Registration error");
})


  .addCase(authLoginOtp.fulfilled, (_, action) => {
    if (action.payload?.status) {
      toast.success("OTP sent successfully");
    }
  })

  .addCase(verifyRegisterOtp.fulfilled, (state, action) => {
    if (action.payload?.status) {
      const token = action.payload.token;

      state.token = token;

      cookies.set("authToken", token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
      });

      toast.success("OTP verified successfully");
    } else {
      toast.success("OTP verification failed");
    }
  });


},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

