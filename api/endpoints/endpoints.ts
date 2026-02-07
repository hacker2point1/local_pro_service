export const endpoints ={
auth:{
    registration : "/users-api/register",
    signIn : "/users-api/login",
    registerOtp:"/users-api/register/verify-otp",
    logInOtp:"/users-api/login/verify-otp"
}
}
export const endpoint = [
    endpoints.auth.registration,
    endpoints.auth.signIn,
    endpoints.auth.registerOtp,
    endpoints.auth.logInOtp
]